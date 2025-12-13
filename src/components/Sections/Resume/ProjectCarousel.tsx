import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { FC, memo, useEffect, useRef, useState } from 'react';

import { ProjectItem } from '../../../data/dataDef';
import ProjectCard from './ProjectCard';

const ProjectCarousel: FC<{ projects: ProjectItem[] }> = memo(({ projects }) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const handleScroll = () => {
        if (!scrollContainerRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        const cardWidth = scrollContainerRef.current.children[0]?.clientWidth || 0;
        const newIndex = Math.round(scrollLeft / cardWidth);

        setCurrentIndex(newIndex);
        setShowLeftArrow(scrollLeft > 10);
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    };

    const scrollToIndex = (index: number) => {
        if (!scrollContainerRef.current) return;
        const cardWidth = scrollContainerRef.current.children[0]?.clientWidth || 0;
        const gap = 24; // gap-6 = 24px
        scrollContainerRef.current.scrollTo({
            left: index * (cardWidth + gap),
            behavior: 'smooth',
        });
    };

    const scroll = (direction: 'left' | 'right') => {
        const newIndex = direction === 'left' ? Math.max(0, currentIndex - 1) : Math.min(projects.length - 1, currentIndex + 1);
        scrollToIndex(newIndex);
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            handleScroll();
        }
    }, []);

    return (
        <div className="relative">
            {/* Left Navigation Arrow */}
            {showLeftArrow && (
                <button
                    aria-label="Scroll left"
                    className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-xl transition-all hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                    onClick={() => scroll('left')}
                    type="button">
                    <ChevronLeftIcon className="h-6 w-6" />
                </button>
            )}

            {/* Right Navigation Arrow */}
            {showRightArrow && (
                <button
                    aria-label="Scroll right"
                    className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-xl transition-all hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                    onClick={() => scroll('right')}
                    type="button">
                    <ChevronRightIcon className="h-6 w-6" />
                </button>
            )}

            {/* Scrollable Container - One card at a time */}
            <div
                className="scrollbar-hide flex gap-6 overflow-x-auto scroll-smooth px-2 py-4"
                onScroll={handleScroll}
                ref={scrollContainerRef}
                style={{
                    scrollSnapType: 'x mandatory',
                    WebkitOverflowScrolling: 'touch',
                }}>
                {projects.map((project, index) => (
                    <div
                        className="flex-shrink-0"
                        key={`${project.title}-${index}`}
                        style={{
                            scrollSnapAlign: 'start',
                            width: 'calc(85% - 1rem)',
                            maxWidth: '650px',
                        }}>
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>

            {/* Scroll Indicator Dots */}
            <div className="mt-4 flex justify-center gap-2">
                {projects.map((_, index) => (
                    <button
                        aria-label={`Go to project ${index + 1}`}
                        className={`h-2 rounded-full transition-all ${index === currentIndex ? 'w-8 bg-orange-500' : 'w-2 bg-neutral-300 hover:bg-orange-400'
                            }`}
                        key={index}
                        onClick={() => scrollToIndex(index)}
                        type="button"
                    />
                ))}
            </div>

            {/* Custom Scrollbar Styles */}
            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </div>
    );
});

ProjectCarousel.displayName = 'ProjectCarousel';
export default ProjectCarousel;
