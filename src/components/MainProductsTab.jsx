import { useState, useRef, useEffect } from 'react';

const tabs = [
  'All',
  'Phones',
  'Smart Watches',
  'Cameras',
  'Headphones',
  'Computers',
  'Gaming',
];

export default function MainProductsTab() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const tabRef = useRef(null);
  const drag = useRef({
    isDown: false,
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
  });

  const handleStart = clientX => {
    drag.current.isDown = true;
    drag.current.isDragging = false;
    drag.current.startX = clientX - tabRef.current.offsetLeft;
    drag.current.scrollLeft = tabRef.current.scrollLeft;
    tabRef.current.classList.add('cursor-grabbing');
  };

  const handleMove = (clientX, e) => {
    if (!drag.current.isDown) return;
    const x = clientX - tabRef.current.offsetLeft;
    const walk = (x - drag.current.startX) * 1.5;
    if (Math.abs(walk) > 5) drag.current.isDragging = true;
    tabRef.current.scrollLeft = drag.current.scrollLeft - walk;
    e.preventDefault();
  };

  const handleEnd = e => {
    drag.current.isDown = false;
    tabRef.current.classList.remove('cursor-grabbing');
    if (drag.current.isDragging) {
      // 뗄 때 클릭 방지
      e.preventDefault();
      e.stopPropagation();
    }
  };

  useEffect(() => {
    const el = tabRef.current;
    if (!el) return; // 초기 null 방지, DOM 연결 후 작동 유도

    const onTouchStart = e => handleStart(e.touches[0].pageX);
    const onTouchMove = e => handleMove(e.touches[0].pageX, e);
    const onTouchEnd = e => handleEnd(e);

    el.addEventListener('touchstart', onTouchStart, { passive: false });
    el.addEventListener('touchmove', onTouchMove, { passive: false });
    el.addEventListener('touchend', onTouchEnd, { passive: false });
    el.addEventListener('touchcancel', onTouchEnd, { passive: false });

    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove', onTouchMove);
      el.removeEventListener('touchend', onTouchEnd);
      el.removeEventListener('touchcancel', onTouchEnd);
    };
  }, []);

  return (
    <div
      ref={tabRef}
      className="overflow-x-auto scrollbar-hide px-4 select-none cursor-grab"
      onMouseDown={e => handleStart(e.pageX)}
      onMouseMove={e => handleMove(e.pageX, e)}
      onMouseUp={e => handleEnd(e)}
      onMouseLeave={e => handleEnd(e)}
    >
      <ul className="flex gap-8 h-8 min-w-max">
        {tabs.map((tab, idx) => (
          <li
            key={idx}
            className={`whitespace-nowrap font-medium leading-8 text-[#8b8b8b] cursor-pointer h-full transition-colors duration-300 ${
              selectedTab === tab
                ? 'relative text-black after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-black after:rounded-full'
                : 'hover:text-[#333]'
            }`}
            onClick={() => {
              if (!drag.current.isDragging) {
                setSelectedTab(tab);
              }
            }}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
}
