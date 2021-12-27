import {Router} from './router'
import {FormProvider} from './Context/FormContext'

const App = () =>{
  return (
    <FormProvider>
      <Router />
    </FormProvider>
  );
}

export default App;