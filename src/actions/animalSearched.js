export const NEXT_PROFILE = 'NEXT_PROFILE';
export const PREVIOUS_PROFILE = 'PREVIOUS_PROFILE';
export const DISPLAY_CONTACT = 'DISPLAY_CONTACT';

export const displayNextProfile = () => ({
  type: NEXT_PROFILE,
});

export const displayPreviousProfile = () => ({
  type: PREVIOUS_PROFILE,
});

export const displayContact = (bool) => ({
  type: DISPLAY_CONTACT,
  displayed: bool,
});
