import { test, expect } from '@playwright/test';
import { obterCodigo2FA } from '../support/db';
import { LoginPage } from '../pages/LoginPage';
import { DashPage } from '../pages/DashPage';


const usuario = {
  cpf: '00000014141',
  senha: '147258'
}

test('test', async ({ page }) => {
  const loginPage = new LoginPage(page)
  const dashPage = new DashPage(page)

  await loginPage.acessaPagina()
  await loginPage.informaCpf(usuario.cpf)
  await loginPage.informaSenha(usuario.senha)

  await page.waitForTimeout(3000)
  const codigo = await obterCodigo2FA();

  await loginPage.informa2Fa(codigo)

  await page.waitForTimeout(4000)

  expect(await dashPage.obterSaldo()).toHaveText('R$ 5.000,00')

});