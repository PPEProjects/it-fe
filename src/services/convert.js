export const thumbImage = thumb_image => {
  if (thumb_image) return thumb_image;
  return `${window.location.origin}/assets/images/smile-eye-default.png`;
};

export const thumbImageBg = thumb_image_Bg => {
  if (thumb_image_Bg) return thumb_image_Bg;
  return '/assets/imgs/background_default.png';
};
