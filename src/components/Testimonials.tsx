export const Testimonials = () => {
  return (
    <div className="container max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 px-4 xl:px-0">
      <div>
        <h2>Don’t just take our words for it</h2>
        <p>
          Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
          Aliquam lorem ante, dapibus in, viverra quis
        </p>
      </div>
      <div className="col-span-1 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="aspect-video bg-gray-100">Card 1</div>
        <div className="aspect-video bg-gray-100">Card 2</div>
        <div className="aspect-video bg-gray-100">Card 3</div>
      </div>
    </div>
  );
};
