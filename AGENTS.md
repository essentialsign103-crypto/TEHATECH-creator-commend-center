<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application architecture
- Keep the creator handbook as one navigable long-form index page with section anchors because the brief explicitly requests section jumps.
- Centralize educational content and progress calculations in browser-safe modules; persist checklist selections locally because this is a personal offline roadmap without accounts.
- Use shared checklist, copy, and section-heading components to keep repeated educational interactions consistent.
