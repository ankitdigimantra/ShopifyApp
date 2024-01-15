import React, { useState } from 'react';
import { Bs1Circle, Bs2Circle, Bs3Circle } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import CheckOut from "./CheckOut";
import "react-phone-number-input/style.css";
import Page1 from "./Page1";
import OrderSummary from "./OrderSummary";
import { Button, message, Steps } from 'antd';

const MobileOverlay = ({ onClose }) => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: 'First',
      content: <Page1/>,
    },
    {
      title: 'Second',
      content: 'Second-content',
    },
    {
      title: 'Last',
      content: 'Last-content',
    },
  ];

  const [closeOverlay, setCloseOverlay] = useState(false);

  const handleCloseOverlay = () => {
    setCloseOverlay(false);
    onClose();
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 z-10 flex items-center justify-center  space-x-2`}
    >
      {/* Overlay */}
      <div className="bg-gray-100 rounded-2xl space-x-4 lg:w-[65%] ss:w-[85%] md:w-[90%] flex">
        <div className="p-4 bg-white rounded-l-2xl w-[65%] ">
          <div className="justify-between p-3 border-b border-gray-200">
            <div className="grid grid-cols-2">
              <div>
                <img
                  src="https://digimantralabs.com/wp-content/uploads/2023/06/dml-logo1.png"
                  alt="logo"
                  style={{ width: "40%", height: "100%" }}
                  className="h-12 cursor-pointer top-3 bottom-3"
                />
              </div>
            </div>
            <div>
              <Steps current={current} items={steps} />
              <div style={{ marginTop: 24 }}>
                {current < steps.length - 1 && (
                  <Button type="primary" onClick={() => next()}>
                    Next
                  </Button>
                )}
                
                {current === steps.length - 1 && (
                  <Button type="primary" onClick={() => message.success('Processing complete!')}>
                    Done
                  </Button>
                )}
                {current > 0 && (
                  <Button
                    style={{
                      margin: '0 8px',
                    }}
                    onClick={() => prev()}
                  >
                    Previous
                  </Button>
                )}
              </div>
              <div className="grid grid-cols-3  pt-4">
                <div className="flex items-center gap-2">
                  <Bs1Circle style={{ width: "12%", height: "100%" }} />
                  <p className="text-s">Mobile</p>
                </div>
                <div className="flex items-center gap-2">
                  <Bs2Circle style={{ width: "12%", height: "100%" }} />
                  <p className="text-s">Address</p>
                </div>
                <div className="flex items-center gap-2">
                  <Bs3Circle style={{ width: "12%", height: "100%" }} />
                  <p className="text-s">Payment</p>
                </div>

                <div className="col-span-3 flex items-center justify-center pt-16 pb-4">
                  <Page1 />
                </div>
              </div>

              <p className="text-smmm flex justify-center pt-2 text-gray-400">
                By proceeding, I accept that I have read and
                <br />
                understood the Digi's
                <a href="/privacy-policy" className="underline " target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>
                {' '}
                and
                <a href="/terms-and-conditions" className="underline" target="_blank" rel="noopener noreferrer">
                  T&amp;C
                </a>
              </p>
            </div>
            <footer className="grid grid-cols-3 items-center ">
              <div className="text-smmmm text-gray-400">
                T&C | Privacy | fc5e4e13
              </div>
              <div className="flex size-[65%]">
                <img
                  src="https://pdp.gokwik.co/assets/icons/pci-dss.svg"
                  width={400}
                />
                <img
                  src="https://pdp.gokwik.co/assets/icons/secured-payments.svg"
                  width={400}
                />
                <img
                  src="https://pdp.gokwik.co/assets/icons/verified-merchant.svg"
                  width={400}
                />
              </div>
              <div className="">
                <div className="justify-end flex">
                  <p className="justify-end flex text-smmmm">Powered By</p>
                  <img
                    src="https://digimantralabs.com/wp-content/uploads/2023/06/dml-logo1.png"
                    alt="logo"
                    width={400}
                    style={{ width: "20%", height: "100%" }}
                    className="justify-end flex  cursor-pointer top-3 bottom-3 "
                  />
                </div>
              </div>
            </footer>
          </div>
          <div className="flex">
            <OrderSummary />
          </div>
          <div
            className="h-[10%] overflow z-20 bg-gray-100 p-2 rounded-3xl"
            onClick={handleCloseOverlay}
          >
            <RxCross2
              className="cursor-pointer flex rounded-3xl bg-gray-300 text-white font-extrabold"
              style={{ width: "26px", height: "26px" }}
            />
          </div>
        </div>
        {closeOverlay && <CheckOut onClick={() => setCloseOverlay(false)} />}
      </div>
    </div>
  );
};

export default MobileOverlay;
