export default function Minibar() {
  return (
    <div>
      <div
        id="minibar"
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 overflow-y-scroll lg:overflow-y-auto no-scrollbar lg:w-20 shrink-0 p-4 bg-base-300 h-full`}
      >
        <div className="space-y-8">
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img src="https://ui-avatars.com/api/?format=svg&background=random&name=Nixon Kosgei&rounded=true" />
            </div>
          </div>
          <div className="avatar offline">
            <div className="w-12 rounded-full">
              <img src="https://ui-avatars.com/api/?format=svg&background=random&name=Harry Potter" />
            </div>
          </div>
          <div className="avatar placeholder offline">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
              <span>MX</span>
            </div>
          </div>
          <div className="avatar placeholder online">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
              <span>DJ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
