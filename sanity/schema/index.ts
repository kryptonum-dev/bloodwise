import cta from './ui/cta';
import seo from './ui/seo';
import global from './singleTypes/global';
import Components from '../components/Components';
import Index_Page from './singleTypes/Index_Page';
import WaitingList_Page from './singleTypes/WaitingList_Page';
import PrivacyPolicy_Page from './singleTypes/PrivacyPolicy_Page';
import NotFound_Page from './singleTypes/NotFound_Page';

export const schemaTypes = [
  cta,
  seo,
  global,
  Components,

  // Single types
  Index_Page,
  WaitingList_Page,
  PrivacyPolicy_Page,
  NotFound_Page,

  // Collection types
];
