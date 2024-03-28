'use client';
import { useCommentsData } from "@/data/comments-data";

const TestimonialLeftCol = () => {
  const comments = useCommentsData();
  if (!comments) return null;
  return (
    <>
      <h2 className="text-30">
        What our customers are
        <br /> saying us?
      </h2>
      <p className="mt-20">
      Niya Voyage consistently exceeds our expectations, providing impeccable service and unforgettable experiences that keep us coming back for more.
      </p>
      <div className="row y-gap-30 pt-60 lg:pt-40">
        <div className="col-sm-5 col-6">
          <div className="text-30 lh-15 fw-600">{comments?.data?.length}K + </div>
          <div className="text-light-1 lh-15">Happy People</div>
        </div>
        <div className="col-sm-5 col-6">
          <div className="text-30 lh-15 fw-600">4.88</div>
          <div className="text-light-1 lh-15">Overall rating</div>
          <div className="d-flex x-gap-5 items-center pt-10">
            <div className="icon-star text-blue-1 text-10" />
            <div className="icon-star text-blue-1 text-10" />
            <div className="icon-star text-blue-1 text-10" />
            <div className="icon-star text-blue-1 text-10" />
            <div className="icon-star text-blue-1 text-10" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialLeftCol;
