import ArrowLeft from '~icons/ArrowLeft.svg';
import ArrowRight from '~icons/ArrowRight.svg';
import { categoryData, CATEGORIES_PER_PAGE } from '~data/homeCategories.js';
import { useState } from 'react';
import CategoryCardsContainer from './CategoryCardsContainer';

// 페이지 당 최대 여섯(CATEGORIES_PER_PAGE) 카테고리씩으로 데이터 정리한 2차원 배열
const paginatedCategories = [];

for (let i = 0; i < categoryData.length; i += CATEGORIES_PER_PAGE) {
  const page = categoryData.slice(i, i + CATEGORIES_PER_PAGE);
  paginatedCategories.push(page);
}

const maxPage = Math.ceil(categoryData.length / CATEGORIES_PER_PAGE) - 1;

export default function BrowseByCategory() {
  const [pageIndex, setPageIndex] = useState(0);

  const handleGoPrev = () =>
    setPageIndex(prev => (prev <= 0 ? maxPage : prev - 1));
  const handleGoNext = () =>
    setPageIndex(prev => (prev >= maxPage ? 0 : prev + 1));

  return (
    <section className="flex justify-center items-center w-full py-16 px-4 bg-[#FAFAFA]">
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
            <button type='button' onClick={handleGoPrev}>
              <img src={ArrowLeft} alt="arrow" />
            </button>
            <button type='button' onClick={handleGoNext}>
              <img src={ArrowRight} alt="arrow" />
            </button>
          </div>
        </div>

        <div
          id="category-cards-visible-section"
          className="overflow-hidden w-full h-auto min-h-32"
        >
          <CategoryCardsContainer
            paginatedCategoriesData={paginatedCategories[pageIndex]}
          />
        </div>
      </div>
    </section>
  );
}
