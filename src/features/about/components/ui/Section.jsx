import { memo } from 'react';

const Section = memo(
  ({ children, className = '', spacing = 'mb-16', ...props }) => {
    return (
      <section className={`${spacing} ${className}`} {...props}>
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';

export default Section;
