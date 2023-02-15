const Accordion = ({ question, answer, id }) => {
  return (
    <>
      <div className="border-[#04fd3f] border-4 my-6">
        <div className="border-[#000] border-2">
          <div className="border-[#04fd3f] border-4 px-4 py-2">
            <div className="accordion">
              <div className="accordion-item">
                <h2 className="accordion-header mb-0">
                  <button
                    className="accordion-button collapsed relative flex items-center w-full py-4 px-6 bg-black border-0 rounded-none transition"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`"#collapse${id}`}
                    aria-expanded="false"
                  >
                    <p className="collapse-title text-left text-2xl font-semibold text-primary-content peer-checked:text-secondary-content">
                      {question}
                    </p>
                  </button>
                </h2>
                <div
                  id={`collapse${id}`}
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body collapse-content text-primary-content peer-checked:text-secondary-content ">
                    <p className="text-md mb-4 ml-5">{answer}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
