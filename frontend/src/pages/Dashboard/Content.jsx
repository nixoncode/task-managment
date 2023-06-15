export default function Content() {
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        <div className="flex flex-row justify-between">
          <h1 className="text-3lg font-semibold">All Tickets</h1>
          <div className="">
            ticket sorting, filtering and pagination goes here
          </div>
        </div>
      </div>
      {/* end page header  */}

      <section>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              {/* <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th> */}
            </thead>
            <tbody>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td className="w-1/2">
                  <p className="line-clamp-1 font-bold">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quasi voluptatibus repellat voluptas incidunt magni sunt
                    nihil similique sint accusamus odit. Laborum eum ratione
                    dolores sint aut totam explicabo, voluptates alias.
                  </p>
                  <p className="line-clamp-1">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Debitis sequi, consequuntur expedita soluta laborum,
                    exercitationem iste modi autem sit possimus ducimus cumque
                    doloribus itaque animi illum ea consequatur veniam eligendi!
                  </p>
                  <span className="badge font-bold">#OPT000006</span>
                  <span>(date: 16 jun 2023)</span>
                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="">David Bart</div>
                      <div className="text-sm opacity-50">raised by</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="badge badge-primary mx-0">primary</div>
                      <div className="text-sm opacity-50 px-2">status</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    {/* <div className="avatar placeholder">
                            <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                              <span>MX</span>
                            </div>
                          </div> */}
                    <div>
                      <div className="">Nixon Kosgei</div>
                      <div className="text-sm opacity-50">assigned to</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="">David Bart</div>
                      <div className="text-sm opacity-50">raised by</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="">Marketing</div>
                      <div className="text-sm opacity-50">category</div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
