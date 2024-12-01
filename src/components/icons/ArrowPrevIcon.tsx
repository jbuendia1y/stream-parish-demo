export function ArrowPrevIcon({
  backgroundColor = "none",
  color = "#C81973",
}: {
  backgroundColor?: string;
  color?: string;
}) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={backgroundColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M7.94002 13.06C7.65912 12.7787 7.50134 12.3975 7.50134 12C7.50134 11.6025 7.65912 11.2212 7.94002 10.94L13.596 5.282C13.8774 5.00074 14.259 4.84278 14.6569 4.84287C14.8539 4.84292 15.0489 4.88177 15.2309 4.9572C15.4129 5.03263 15.5783 5.14317 15.7175 5.2825C15.8568 5.42183 15.9672 5.58723 16.0426 5.76925C16.1179 5.95127 16.1567 6.14635 16.1567 6.34335C16.1566 6.54035 16.1178 6.73541 16.0423 6.9174C15.9669 7.09939 15.8564 7.26473 15.717 7.404L11.121 12L15.717 16.596C15.8604 16.7343 15.9747 16.8998 16.0534 17.0827C16.1321 17.2657 16.1736 17.4625 16.1754 17.6617C16.1772 17.8608 16.1394 18.0584 16.064 18.2428C15.9887 18.4271 15.8774 18.5947 15.7366 18.7356C15.5958 18.8765 15.4284 18.9879 15.2441 19.0634C15.0598 19.139 14.8623 19.177 14.6631 19.1754C14.464 19.1737 14.2671 19.1324 14.0841 19.0539C13.901 18.9754 13.7355 18.8612 13.597 18.718L7.93802 13.06H7.94002Z"
          fill={color}
        />
      </g>
      <defs>
        <path id="clip0_5_8">
          <rect width="24" height="24" fill="white" />
        </path>
      </defs>
    </svg>
  );
}
