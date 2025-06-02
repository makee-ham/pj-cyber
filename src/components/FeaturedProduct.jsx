import Button from './Button';

export default function FeaturedProduct({
  title,
  description,
  bgColor,
  textColor = 'black',
  mobileImg,
  hasButton = false,
  hightlightTitleIndex = -1,
}) {
  const titleArr = title.split(' ');

  return (
    // gap 24px
    // tailwind는 빌드 타임에 사용된 클래스만 인식하기에, bgColor같은 런타임 변수를 그대로 사용하면 미리 파싱을 안 했기에 적용 안 됨 (명시적으로 class 이름 넘겨야 함)
    // Button.jsx 때처럼 경우를 나누어 문자열로 class를 더해줘야 함. 아니면 tailwind-merge 쓰든가.
    // 이에 style로 분리
    <article
      className="flex flex-col items-center justify-center gap-8 w-full px-4 py-10 md:h-full"
      style={{ backgroundColor: bgColor }}
    >
      <img
        src={mobileImg}
        alt="featured"
        className="object-contain max-h-[200px]"
      />
      <div
        className="flex flex-col items-center gap-4 w-full"
        style={{ color: textColor }}
      >
        <h2 className="text-[34px] leading-10 text-center">
          {titleArr.map((word, i) =>
            i === hightlightTitleIndex ||
            (hightlightTitleIndex === -1 && i === titleArr.length - 1) ? (
              <strong key={i} className="font-semibold">
                {word + ' '}
              </strong>
            ) : (
              <span key={i} className="font-light">
                {word + ' '}
              </span>
            ),
          )}
        </h2>
        <p className="text-[#909090] leading-6 text-center text-base font-medium">
          {description}
        </p>
        {hasButton ? (
          <Button
            variant="ghost"
            color="black"
            disabled={false}
            children
            className="w-full"
          >
            Shop Now
          </Button>
        ) : null}
      </div>
    </article>
  );
}
