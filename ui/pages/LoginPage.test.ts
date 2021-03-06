import {render} from '@testing-library/svelte'
import LoginPage from './LoginPage.svelte'
import {$_} from '../test-utils'

it('renders', async () => {
  const {container} = render(LoginPage)
  expect(container).toContainHTML($_('login.title'))
})
