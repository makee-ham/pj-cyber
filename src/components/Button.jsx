// 공통: 세로 크기 고정, 가로 크기 유동적, 폰트 수평+수직 중앙 정렬
// 고스트: 높이 56px, 폰트 16px Medium, 버튼 색과 폰트컬러 일치, border-radius 6px
// filled: 높이 48px, 폰트 14px medium, 버튼 색과 폰트컬러 반대, border-radius 8px

// disabled 스타일 추후 필요시 추가 (우선 자리는 두고)

export default function Button({
  variant = 'filled',
  color = 'black',
  onClick,
  disabled = false,
  children,
}) {
  // 공통 스타일
  let className =
    'inline-flex w-auto px-4 justify-center items-center font-medium text-center transition duration-200 focus:outline-none cursor-pointer';

  // disabled true
  if (disabled) {
    className += ' opacity-50 cursor-not-allowed';
  }

  // filled 스타일
  if (variant === 'filled') {
    className += ' h-12 text-[14px] rounded-[8px]';

    if (color === 'black') {
      className += ' bg-black text-white';
    } else if (color === 'white') {
      className += ' bg-white text-black';
    } else {
      className += ' bg-gray-300 text-black';
    }

    if (!disabled) {
      className += ' hover:opacity-80';
    }
  }

  // ghost 스타일
  if (variant === 'ghost') {
    className += ' h-14 text-[16px] rounded-[6px] border bg-transparent';

    if (color === 'black') {
      className += ' border-black text-black';
      if (!disabled) className += ' hover:bg-black hover:text-white';
    } else if (color === 'white') {
      className += ' border-white text-white';
      if (!disabled) className += ' hover:bg-white hover:text-black';
    } else {
      className += ' border-gray-300 text-gray-300';
      if (!disabled) className += ' hover:bg-gray-300/10';
    }
  }

  return (
    <button onClick={onClick} disabled={disabled} className={className}>
      {children}
    </button>
  );
}
