import { test, expect } from '@playwright/test';

test('user can log in and log out successfully', async ({ page }) => {
  await page.goto(
    'https://bestpractice.qa2.nga.net.au/be/index.cfm?event=go.showLogin&rmuh=796F1D7F54AC02C5659368D4F03E1652968E27F2'
  );

  const usernameInput = page.getByLabel('Username:');
  await expect(usernameInput).toBeVisible();
  await usernameInput.fill('Sravya');

  const continueButton = page.getByRole('button', { name: 'Continue' });
  await expect(continueButton).toBeEnabled();
  await continueButton.click();

  const signInWithPasswordButton = page.getByRole('button', { name: 'Sign in with password' });
  await expect(signInWithPasswordButton).toBeVisible();
  await signInWithPasswordButton.click();

  const passwordInput = page.getByLabel('Password:');
  await expect(passwordInput).toBeVisible();
  await passwordInput.fill('admin1234567890');

  const loginButton = page.getByRole('button', { name: 'Login' });
  await expect(loginButton).toBeEnabled();
  await loginButton.click();

  const userMenuButton = page.getByRole('button', { name: 'Sravya SK Toggle user menu' });
  await expect(userMenuButton).toBeVisible();
  await userMenuButton.click();

  const logoutLink = page.getByText('Log Out');
  await expect(logoutLink).toBeVisible();
  await logoutLink.click();

  await expect(page.getByRole('button', { name: 'Continue' })).toBeVisible();
  await expect(page).toHaveURL(/go\.showLogin/);
});