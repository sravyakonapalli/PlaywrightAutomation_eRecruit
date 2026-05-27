import { expect, Page } from '@playwright/test';

export class LoginPage {

  constructor(private page: Page) {}

  private emailInput =
    () => this.page.getByLabel('Username');

  private continueButton =
     () => this.page.getByRole('button', { name: 'Continue' });

  private passwordInput =
    () => this.page.getByLabel('Password');

  private loginButton =
    () => this.page.getByRole('button', { name: 'Login' });

  async navigateToLoginPage() {

    await this.page.goto('/be');
  }

  async login(email: string, password: string) {

    await this.emailInput().fill(email);

    await this.continueButton().click();

    await this.passwordInput().fill(password);

    await this.loginButton().click();
  }

  async verifyText(expectedText: string) {

    await expect(
      this.page.getByText(expectedText)
    ).toBeVisible();
  }
}