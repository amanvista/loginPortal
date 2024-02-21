import { signIn } from './utils/api';
jest.mock('axios');
test('Api call for successful login', async () => {
  axios.get.mockImplementation((url) => {
    const userData = { username: "tobias.funke@reqres.in", password: 'abc' };
    return Promise.resolve({ data: {}, status: 200 });
  });
  const result = await signIn(userId);
  expect(result).toEqual({ status: "success" });
});
