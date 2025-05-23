import Search from './Search';
import Table from './Table'


const App = () => {
  return (
    <div className="flex flex-col items-center  h-screen">
      <div className="py-10  mb-10 w-full flex flex-col items-center justify-center bg-gradient-to-r from-primary to-secondary">
        <h1 className="text-3xl font-bold text-white mb-3">
          YVR Carry-On Baggage Allowances
        </h1>
        <p className="text-white">
          This is a list of the carry-on baggage allowances for the airlines that fly from Vancouver International Airport (YVR).
        </p>
      </div>
      <Search />
      <Table />
    </div>
  );
}

export default App