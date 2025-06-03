import Button from './Button';

export default function FeaturedProduct({
  dId,
  title,
  description,
  bgColor,
  textColor = 'black',
  mobileImg,
  desktopImg,
  hasButton = false,
  hightlightTitleIndex = -1,
  isDesktop,
}) {
  const titleArr = title.split(' ');

  return (
    // tailwind는 빌드 타임에 사용된 클래스만 인식하기에, bgColor같은 런타임 변수를 그대로 사용하면 미리 파싱을 안 했기에 적용 안 됨 (명시적으로 class 이름 넘겨야 함)
    // Button.jsx 때처럼 경우를 나누어 문자열로 class를 더해줘야 함. 아니면 tailwind-merge 쓰든가.
    // 이에 style로 분리
    <article
      className={`flex flex-col  items-center justify-center md:justify-between  gap-8 w-full px-4 md:px-0 py-10 overflow-hidden ${dId === 'l' ? 'md:flex-row-reverse md:py-[49px] md:gap-0 md:pl-14 md:h-[600px]' : 'md:flex-row md:py-0 md:pr-12 md:gap-[1vw]'} ${dId === 'm' ? 'md:h-[328px]' : 'md:h-[272px]'}`}
      style={{
        backgroundColor: bgColor,
      }}
    >
      <img
        src={isDesktop ? desktopImg : mobileImg}
        alt="featured"
        className={`object-contain max-h-[200px] md:max-w-[40%] md:max-h-full `}
      />
      <div
        className={`flex flex-col items-center md:items-start gap-4 ${dId === 'sa' || dId === 'sv' ? 'md:gap-2 md:my-16 md:ml-4 md:max-w-40' : dId === 'm' ? 'md:my-24 md:max-w-[404px]' : 'md:my-28 md:max-w-[360px]'} w-full text-balance`}
        style={{ color: textColor }}
      >
        <h2
          className={`text-[34px] leading-10 text-center md:text-left ${dId === 'sa' || dId === 'sv' ? 'md:text-[29px]' : dId === 'm' ? 'md:text-[49px]' : 'md:text-[64px] md:leading-14'} `}
        >
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
        <p className="text-[#909090] leading-6 text-center md:text-left text-base md:text-[14px] font-medium">
          {description}
        </p>
        {hasButton ? (
          <Button
            variant="ghost"
            color="black"
            disabled={false}
            children
            className={`w-full ${isDesktop ? 'md:max-w-[191px]' : null}`}
          >
            Shop Now
          </Button>
        ) : null}
      </div>
    </article>
  );
}
