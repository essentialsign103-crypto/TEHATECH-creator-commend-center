/**
 * Error reporting utility for the application.
 * Logs errors to the console and can be extended to integrate with
 * monitoring services like Sentry, Rollbar, or custom analytics.
 */

export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  // Log error details for development and server logs
  if (typeof window === "undefined") {
    console.error(describeError(error), context);
    return;
  }

  // In browser, just log to console for now
  // You can replace this with Sentry, Rollbar, or other service
  console.error(describeError(error), context);
}

const MAX_SERIALIZED_LENGTH = 2000;

function describeThrown(error: unknown): string {
  if (error instanceof Response) {
    return `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`;
  }
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  const { message } = (error ?? {}) as { message?: unknown };
  if (typeof message === "string" && message.length > 0) return message;
  try {
    return JSON.stringify(error)?.slice(0, MAX_SERIALIZED_LENGTH) ?? String(error);
  } catch {
    return String(error);
  }
}

export function describeError(error: unknown): string {
  const parts: string[] = [];
  let current: unknown = error;
  const DEPTH_LIMIT = 5;
  for (let depth = 0; depth < DEPTH_LIMIT && current != null; depth++) {
    if (!(current instanceof Error)) {
      parts.push(typeof current === "string" ? current : safeStringify(current));
      break;
    }
    const label = depth === 0 ? "" : "caused by: ";
    parts.push(`${label}${current.stack ?? `${current.name}: ${current.message}`}`);
    current = current.cause;
  }
  return parts.join("\n").slice(0, 8000);
}

function safeStringify(value: unknown): string {
  try {
    return JSON.stringify(value) ?? String(value);
  } catch {
    return String(value);
  }
}
