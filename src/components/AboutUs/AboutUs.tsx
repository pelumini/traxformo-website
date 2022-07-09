import React from 'react';
import Member from '../Member';

export const AboutUs: React.FC = () => {
  return (
    <section className="flex flex-col bg-white py-20 text-3xl md:text-4xl tracking-tight">
      <div className="container mx-auto px-11">
        <strong>We will help you ship better apps, faster</strong> Our team of
        expert engineers has created the best user experiences in some of the
        most popular apps worldwide.
      </div>
      <div className="container mx-auto px-11 text-center mt-28">
        <h2>Our Team</h2>
        <div className="mt-2">the &ldquo;spec-ops&rdquo;</div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
          <Member
            id="marie"
            name="Marie"
            socialId="@mrousavy"
            link="https://github.com/mrousavy"
          />
          <Member
            id="szymon"
            name="Szymon"
            socialId="@mrousavy"
            link="https://github.com/mrousavy"
          />
          <Member
            id="jacobi"
            name="Jacobi"
            socialId="@mrousavy"
            link="https://github.com/mrousavy"
          />
          <Member
            id="roland"
            name="Roland"
            socialId="@mrousavy"
            link="https://github.com/mrousavy"
          />
          <Member
            id="ade"
            name="Ade"
            socialId="@mrousavy"
            link="https://github.com/mrousavy"
          />
          <Member
            id="julie"
            name="Julie"
            socialId="@mrousavy"
            link="https://github.com/mrousavy"
          />
          <Member
            id="sam"
            name="Sam"
            socialId="@mrousavy"
            link="https://github.com/mrousavy"
          />
        </div>
      </div>
    </section>
  );
};
