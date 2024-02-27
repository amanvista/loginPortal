import { signIn } from './utils/api';
import axios from 'axios';
jest.mock('axios');
test('Api call for successful login', async () => {
  const userData = { username: "tobias.funke@reqres.in", password: 'abc' };

  axios.post.mockImplementation((url) => {
    return Promise.resolve({ data: {}, status: 200 });
  });
  const result = await signIn(userData);
  expect(result).toEqual({ status: "success" });
});
