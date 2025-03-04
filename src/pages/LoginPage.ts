import { Page } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToLoginPage() {
    await this.page.goto(process.env.BASE_URL!);
  }

}