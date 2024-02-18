function FourthSection() {
  return (
    <>
      <section className="w-10/12 m-auto mt-[150px] flex flex-col gap-10">
        <section className="text-center">
          <h1 className="font-bold text-[40px]">
            A <span className="text-blue-500">price perfect</span> for your
            needs.
          </h1>
          <p>
            From catering for your personal, business, event, socials needs, you
            can be <br />
            rest assured we have you in mind in our pricing.
          </p>
        </section>

        <section className="border-[1px] border-green-500">
          <article className="flex flex-col justify-center items-center gap-10 md:gap-0 md:flex-row border-[1px] border-red-500 md:w-10/12 m-auto">
            <section className="flex justify-center items-center border-b-[1px] border-t-[1px] border-l-[1px] border-r-[1px] md:border-r-[0] border-blue-500 w-full md:w-4/12 h-[340px]">
              <section className="flex flex-col gap-3">
                <h3>Basic</h3>
                <h2 className="font-semibold text-[27px]">Free</h2>
                <p>Free plan for all users</p>
                <p>Unlimited URL Shortening</p>
                <p>Basic Link Analytics</p>
                <p>Customizable Short Links</p>
                <p>Standard Support</p>
                <p>Ad-supported</p>
              </section>
            </section>

            <section className="flex justify-center items-center bg-blue-800 text-white rounded border-[1px] border-blue-800  w-full md:w-4/12 h-[440px]">
              <section className="flex flex-col gap-3">
                <h3>Professional</h3>
                <h2 className="font-semibold text-[27px]">$15/month</h2>
                <p>Ideal for business creators</p>
                <p>Enhanced Link Analytics</p>
                <p>Custom Branded Domains</p>
                <p>Advanced Link Customization</p>
                <p>Priority Support</p>
                <p>Ad-free Experience</p>
              </section>
            </section>

            <section className="flex justify-center items-center border-b-[1px] border-t-[1px] border-l-[1px] border-r-[1px] md:border-l-[0] border-blue-500 w-full md:w-4/12 m-auto h-[340px]">
              <section className="flex flex-col gap-3">
                <h3>Teams</h3>
                <h2 className="font-semibold text-[27px]">$25/month</h2>
                <p>Share with up to 10 users</p>
                <p>Team Collaboration</p>
                <p>User Roles and Permissions</p>
                <p>Enhanced Security</p>
                <p>API Access</p>
                <p>Dedicated Account Manager</p>
              </section>
            </section>
          </article>
        </section>

        <section className="flex justify-center flex-col gap-5 md:flex-row ">
          <button className="bg-white text-blue-500 py-[8px] px-[20px] rounded-[100px] border-[1px] border-blue-500">
            Get Custom Pricing
          </button>
          <button className="bg-blue-500 text-white py-[8px] px-[20px] rounded-[100px]">
            Select Pricing
          </button>
        </section>
      </section>
    </>
  );
}

export default FourthSection;
