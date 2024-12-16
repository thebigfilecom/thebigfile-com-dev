declare global {
  interface Window {
    _paq: any;
  }
}

export const trackEvent = (category: string, action: string, name?: string) => {
  console.log('Track:', category, action, name);
};
