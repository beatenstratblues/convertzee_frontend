const PageHeroAndSubtextComponent = ({ heading, subtext }) => {
  return (
    <div>
      <h1 className="text-4xl text-center pt-10 md:text-6xl md:pt-15 font-head font-bold">
        {heading}
      </h1>
      <p className="text-center mt-3 md:text-xl font-bod">{subtext}</p>
    </div>
  );
};

export default PageHeroAndSubtextComponent;
