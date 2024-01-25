type EditorDeImagensSvgPropsType = {
  size?: number;
};

export default function EditorDeImagensSvg({
  size = 22,
}: EditorDeImagensSvgPropsType) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="512" height="512" rx="80" fill="url(#paint0_linear_119_2)" />
      <path
        d="M138.818 368V144.582H289.364V183.527H186.055V236.764H281.618V275.709H186.055V329.055H289.8V368H138.818ZM374.155 144.582V368H326.918V144.582H374.155Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_119_2"
          x1="256"
          y1="0"
          x2="256"
          y2="512"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#ACE0F9" />
          <stop offset="1" stop-color="#0B608F" />
        </linearGradient>
      </defs>
    </svg>
  );
}
