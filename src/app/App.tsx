import { Provider } from 'react-redux'

import { Router } from '@/processes/routes'
import { store } from '@/state/store'

export function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}
