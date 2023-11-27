import React from 'react';

const Book = () => {
  return (
    <div>
      <>
        {/* component */}
        <div id='koko' className="flex items-center justify-center p-12">
          {/* Author: FormBold Team */}
          {/* Learn More: https://formbold.com */}
          <div className="mx-auto w-full max-w-[550px]">
            <form action="https://formbold.com/s/FORM_ID" method="POST">
              <div className="-mx-3 flex flex-wrap">
                {/* Date Input */}
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="date"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                {/* Time Input */}
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="time"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Time
                    </label>
                    <input
                      type="time"
                      name="time"
                      id="time"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                {/* Location Input */}
                <div className="w-full px-3">
                  <div className="mb-5">
                    <label
                      htmlFor="location"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      id="location"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>

              <div>
                <button id='dffd' className="bn632-hover bn28">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    </div>
  );
}

export default Book;
