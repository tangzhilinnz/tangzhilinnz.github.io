import {ArrowDownTrayIcon} from '@heroicons/react/24/outline';
import {FC, memo} from 'react';

import type {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content, gpa, transcriptUrl} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
          <span>•</span>
          <span className="flex-1 text-sm sm:flex-none">{date}</span>
        </div>
        {/* GPA and Transcript Link */}
        {(gpa || transcriptUrl) && (
          <div className="mt-2 flex items-center justify-center gap-x-3 md:justify-start">
            {gpa && (
              <span className="inline-flex items-center rounded-full bg-orange-500 px-3 py-1 text-sm font-semibold text-white">
                GPA: {gpa}
              </span>
            )}
            {transcriptUrl && (
              <a
                className="inline-flex items-center gap-x-1 rounded-full border-2 border-orange-500 px-3 py-1 text-sm font-medium text-orange-500 transition-all hover:bg-orange-500 hover:text-white"
                download="Zhilin_Tang_Transcript.pdf"
                href={transcriptUrl}>
                <ArrowDownTrayIcon className="h-4 w-4" />
                View Transcript
              </a>
            )}
          </div>
        )}
      </div>
      {content}
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
