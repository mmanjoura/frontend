
'use client';
import React, { useState } from "react";
import CustomerInfo from "@/components/booking-page/CustomerInfo";
import PaymentInfo from "@/components/booking-page/PaymentInfo";
import OrderSubmittedInfo from "@/components/booking-page/OrderSubmittedInfo";
import { useSearchParams } from  "next/navigation";
import { useActivityData } from "@/data/activities-data";


const Index = () => {
  const search_params = useSearchParams();

  const [bookingData, setBookingData] = useState({
    product_id: null,
    start_date: null,
    end_date: null,
    num_adult: null,
    num_children: null
  });

  bookingData.product_id = search_params.get('product_id');
  bookingData.start_date = search_params.get('start_date');
  bookingData.end_date = search_params.get('end_date');
  bookingData.num_adult = search_params.get('num_adult');
  bookingData.num_children = search_params.get('num_children');






  const [currentStep, setCurrentStep] = useState(0);

  const activity = useActivityData(search_params.get('product_id'));

  console.log("Activity Data: ", activity);



  const steps = [
    {
      title: "Personal Details",
      stepNo: "1",
      stepBar: (
        <>
          <div className="col d-none d-sm-block">
            <div className="w-full h-1 bg-border"></div>
          </div>
        </>
      ),
      content: <CustomerInfo activity = {activity} bookingData = {bookingData}/>,
    },
    {
      title: "Payment Details",
      stepNo: "2",
      stepBar: (
        <>
          <div className="col d-none d-sm-block">
            <div className="w-full h-1 bg-border"></div>
          </div>
        </>
      ),
      content: <PaymentInfo />,
    },
    {
      title: "Final Step",
      stepNo: "3",
      stepBar: "",
      content: <OrderSubmittedInfo />,
    },
  ];

  const renderStep = () => {
    const { content } = steps[currentStep];
    return <>{content}</>;
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      <div className="row x-gap-40 y-gap-30 items-center">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="col-auto">
              <div
                className="d-flex items-center cursor-pointer transition"
                onClick={() => setCurrentStep(index)}
              >
                <div
                  className={
                    currentStep === index
                      ? "active size-40 rounded-full flex-center bg-blue-1"
                      : "size-40 rounded-full flex-center bg-blue-1-05 text-blue-1 fw-500"
                  }
                >
                  {currentStep === index ? (
                    <>
                      <i className="icon-check text-16 text-white"></i>
                    </>
                  ) : (
                    <>
                      <span>{step.stepNo}</span>
                    </>
                  )}
                </div>

                <div className="text-18 fw-500 ml-10"> {step.title}</div>
              </div>
            </div>
            {/* End .col */}

            {step.stepBar}
          </React.Fragment>
        ))}
      </div>
      {/* End stepper header part */}

      <div className="row">{renderStep()}</div>
      {/* End main content */}

      <div className="row x-gap-20 y-gap-20 pt-20">
        <div className="col-auto">
          <button
            className="button h-60 px-24 -blue-1 bg-light-2" aria-label="Previous" type="button"
            disabled={currentStep === 0}
            onClick={previousStep}
          >
            Previous
          </button>
        </div>
        {/* End prvious btn */}

        <div className="col-auto">
          <button
            className="button h-60 px-24 -dark-1 bg-blue-1 text-white" aria-label="Next" type="button"
            disabled={currentStep === steps.length - 1}
            onClick={nextStep}
          >
            Next <div className="icon-arrow-top-right ml-15" />
          </button>
          <br></br>
          <br></br>
          <br></br>
        </div>
        {/* End next btn */}
        
      </div>
     
      {/* End stepper button */}
    </>
  );
};

export default Index;
