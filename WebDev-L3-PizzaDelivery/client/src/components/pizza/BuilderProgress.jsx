const BuilderProgress = ({
  steps = [],
  completedSteps = [],
}) => {
  return (
    <div className="w-full">
      <div className="flex items-start justify-between">
        {steps.map((step, index) => {
          const isCompleted = completedSteps.includes(step.id);

          return (
            <div
              key={step.id || index}
              className="flex flex-1 items-start"
            >
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition-all ${
                    isCompleted
                      ? "bg-[#27245B] text-white"
                      : "bg-slate-100 text-slate-400"
                  }`}
                >
                  {isCompleted ? "✓" : index + 1}
                </div>

                <span
                  className={`mt-2 text-center text-xs font-medium ${
                    isCompleted
                      ? "text-[#27245B]"
                      : "text-slate-400"
                  }`}
                >
                  {step.label}
                </span>
              </div>

              {index < steps.length - 1 && (
                <div
                  className={`mt-[18px] h-0.5 flex-1 ${
                    isCompleted
                      ? "bg-[#27245B]"
                      : "bg-slate-200"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BuilderProgress;