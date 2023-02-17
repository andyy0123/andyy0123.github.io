import { Home, Form, Info } from './components/index';

const App = () => (
  <div className='w-full'>
    <Home />
    <Info />
    <div class='w-full space-y-8 my-auto mx-0 py-20'>
      <div className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
        已過表單統計時間，如需變更，請洽新人或主婚人
      </div>
    </div>
    {/* <Form /> */}
  </div>
);

export default App;
