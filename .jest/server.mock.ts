global.fetch = require('node-fetch')

import { server } from '../src/utils/mockServer/server'
// ficar escutando todas as chamadas nos testes
beforeAll(() => server.listen())
// reseta todos os handlers para caso eles sejam chamados
// so they don't affect other tests.
afterEach(() => server.resetHandlers())
// fecha o server e limpa os testes
afterAll(() => server.close())
