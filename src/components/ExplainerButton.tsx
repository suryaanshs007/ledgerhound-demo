const VIDEO_URL = 'https://youtu.be/O3J52yQfb9w';

function YouTubeMark() {
  return (
    <svg viewBox="0 0 28 20" className="h-[14px] w-5 shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover/yt:scale-110" aria-hidden>
      <rect width="28" height="20" rx="5.6" fill="#FF0000" />
      <path d="M11.3 5.7v8.6l7.4-4.3Z" fill="#fff" />
    </svg>
  );
}

/**
 * Compact pill with the YouTube mark that unfurls into "Watch the explainer video" on hover/focus.
 * Must live inside an `@container` so it only expands when there is room beside it.
 *
 * The width animation uses the grid `0fr → 1fr` trick: the label sits in a one-column grid whose
 * track interpolates smoothly to the label's natural width, so no hard-coded max-width is needed.
 */
export function ExplainerButton() {
  return (
    <a
      href={VIDEO_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Watch the explainer video (opens YouTube)"
      title="Watch the explainer video"
      className="group/yt flex h-9 items-center rounded-full border border-line-2 bg-surface px-[7px] text-[14px] font-semibold text-ink-2 transition-[border-color,box-shadow,padding,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-ink hover:text-ink hover:shadow-card focus-visible:rounded-full @min-[15rem]:hover:pr-3.5 @min-[15rem]:focus-visible:pr-3.5"
    >
      <YouTubeMark />
      <span className="grid grid-cols-[0fr] transition-[grid-template-columns] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] @min-[15rem]:group-hover/yt:grid-cols-[1fr] @min-[15rem]:group-focus-visible/yt:grid-cols-[1fr]">
        <span className="overflow-hidden whitespace-nowrap">
          <span className="inline-block -translate-x-1.5 pl-2 opacity-0 transition-[opacity,translate] duration-300 ease-out @min-[15rem]:group-hover/yt:translate-x-0 @min-[15rem]:group-hover/yt:opacity-100 @min-[15rem]:group-hover/yt:delay-100 @min-[15rem]:group-focus-visible/yt:translate-x-0 @min-[15rem]:group-focus-visible/yt:opacity-100">
            Watch the explainer video
          </span>
        </span>
      </span>
    </a>
  );
}
