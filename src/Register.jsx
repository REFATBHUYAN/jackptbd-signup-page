function Register() {
  return (
    <>
      {/* Sign Up Page */} 
      <div className="w-full md:w-[390px] mx-auto border bg-[#303030] overflow-hidden drop-shadow-lg">
        <div className="flex justify-center items-center pt-10">
          <p className="font-bold text-3xl text-white">Jackpt</p>
        </div>
        <div className="bg-[#FFFFFF] mt-20 p-6 rounded-tl-3xl rounded-tr-3xl">
          {/* page header section */}
          <div className="mb-6">
            {/* <FaArrowLeft className="w-6 h-6"></FaArrowLeft> */}
            <h1 className="font-bold text-2xl mb-6">রেজিস্ট্রেশন</h1>
            <p>
              আপনার অ্যাকাউন্ট চালু করার জন্য নিম্ন বর্নিত প্রয়োজনীয় তথ্য প্রধান
              করুন
            </p>
          </div>
          {/* form data input section */}
          <form>
            <div className="mb-6">
              <input
                type="tel"
                id="phone"
                className="border border-[#DCF7C5] text-sm rounded-lg w-full p-2.5"
                placeholder="আপনার মোবাইল নম্বর"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                id="name"
                className="border border-[#DCF7C5] text-sm rounded-lg w-full p-2.5"
                placeholder="আপনার নাম (জাতিয় পরিচয়পত্র অনুযায়ী)"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                জন্ম তারিখ (DD/MM/YYYY)
              </label>
              <input
                type="date"
                id="phone"
                className="border border-[#DCF7C5] text-sm rounded-lg w-full p-2.5"
                placeholder="Enter your mobile number"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                লিঙ্গ
              </label>
              <div className="flex gap-2">
                <div className="flex items-center justify-center w-full border border-[#DCF7C5] text-sm rounded-lg p-2.5">
                  <input
                    type="radio"
                    id="phone"
                    className="border border-[#DCF7C5] text-sm rounded-lg p-2.5"
                    placeholder="Enter your mobile number"
                    required
                  />
                  <label
                    htmlFor="email"
                    className="ml-2 font-medium text-gray-900 dark:text-white"
                  >
                    পুরুষ
                  </label>
                </div>
                <div className="flex w-full items-center justify-center border border-[#DCF7C5] text-sm rounded-lg p-2.5">
                  <input
                    type="radio"
                    id="phone"
                    className="border border-[#DCF7C5] text-sm rounded-lg p-2.5"
                    placeholder="Enter your mobile number"
                    required
                  />
                  <label
                    htmlFor="email"
                    className="ml-2 font-medium text-gray-900 dark:text-white"
                  >
                    মহিলা
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <input
                type="number"
                id="phone"
                className="border border-[#DCF7C5] text-sm rounded-lg w-full p-2.5"
                placeholder="রেফার কোড (যদি থাকে)"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                আপনার ৬ ডিজিট পিন সেট করুন
              </label>
              <div className="flex w-full">
                <input
                  type="password"
                  id="password"
                  className="border border-[#DCF7C5] text-sm rounded-lg w-full p-2.5"
                  placeholder="আপনার ৬ ডিজিট পিন প্রবেশ করুন"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <div className="flex w-full">
                <input
                  type="password"
                  id="password"
                  className="border border-[#DCF7C5] text-sm rounded-lg w-full p-2.5"
                  placeholder="আপনার ৬ ডিজিট পিন পুনরায় প্রবেশ করুন"
                  required
                />
              </div>
            </div>
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300"
                  required
                />
              </div>
              <label htmlFor="terms" className="ml-2 text-sm font-medium">
                বাক্সটিতে টিক চিহ্ন দেয়ার মাধ্যমে আমি নিশ্চিত করছি যে প্রদত্ত
                সকল তথ্য, আমার জানামতে সঠিক এবং সকল শর্তাবলী সম্মতি জানাচ্ছি
              </label>
            </div>

            {/* sign up and input submit button */}
            <button
              type="submit"
              className="w-full bg-[#0E9A0E] py-3 font-bold text-white rounded-md mt-7"
            >
              অ্যাকাউন্ট খুলুন
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
