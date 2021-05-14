import { composeStories } from "@storybook/testing-react";
import { mount } from "@cypress/vue";

import * as stories from "./Button.stories";

const { Primary } = composeStories(stories);

// eslint-disable-next-line no-undef
it("<Button />", () => {
  mount(Primary());
});
