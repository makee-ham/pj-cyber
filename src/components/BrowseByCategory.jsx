import ArrowLeft from '~icons/ArrowLeft.svg';
import ArrowRight from '~icons/ArrowRight.svg';
import { categoryData, CATEGORIES_PER_PAGE } from '~data/homeCategories.js';
import { useState } from 'react';

export default function BrowseByCategory() {
  const [pageIndex, setPageIndex] = useState(0);

  const maxPage = Math.ceil(categoryData.length / CATEGORIES_PER_PAGE) - 1;

  const handleGoPrev = () =>
    setPageIndex(prev => {
      prev <= 0 ? maxPage : prev - 1;
    });
  const handleGoNext = () =>
    setPageIndex(prev => (prev >= maxPage ? 0 : prev + 1));

  return (
    <section className="flex justify-center items-center w-full py-16 px-4">
      <div
        id="category-container"
        className="flex flex-col gap-12 w-full max-w-[1120px]"
      >
        <div
          id="category-header"
          className="flex justify-between items-center w-full h-8"
        >
          <h3 className="text-2xl font-medium leading-8 tracking-[1%]">
            Browse By Category
          </h3>
          <div className="flex justify-between w-20 h-8">
            <button onClick={handleGoPrev}>
              <img src={ArrowLeft} alt="arrow" />
            </button>
            <button onClick={handleGoNext}>
              <img src={ArrowRight} alt="arrow" />
            </button>
          </div>
        </div>

        <div
          id="category-cards-visible-section"
          className="overflow-hidden w-full h-auto min-h-32"
        >
          <div
            id="caregory-cards-container"
            className="flex flex-wrap gap-4 w-full h-full"
          >
            {'여기에 각 카드들'}
          </div>
        </div>
      </div>
    </section>
  );
}
