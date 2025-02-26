import { test, expect } from '@playwright/test';
import { obterCodigo2FA } from '../support/db';
import { LoginPage } from '../pages/LoginPage';
import { DashPage } from '../pages/DashPage';
import { cleanJObs, getJob } from '../support/redis';



test('test', async ({ page }) => {
  const loginPage = new LoginPage(page)
  const dashPage = new DashPage(page)

  const usuario = {
    cpf: '00000014141',
    senha: '147258'
  }

  await cleanJObs();

  await loginPage.acessaPagina()
  await loginPage.informaCpf(usuario.cpf)
  await loginPage.informaSenha(usuario.senha)

  await page.getByRole("heading", {name: 'Verificação em duas etapas'})
  .waitFor({timeout:3000})

  const codigo = await getJob()

  // await page.waitForTimeout(3000)
  //const codigo = await obterCodigo2FA(usuario.cpf); substituido pelo get do redis

  await loginPage.informa2Fa(codigo)

  await page.waitForTimeout(4000)

  await expect(await dashPage.obterSaldo()).toHaveText('R$ 5.000,00')

});