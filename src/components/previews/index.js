import { lazy } from 'react';

export const previews = {
  affectcare: lazy(() => import('./AffectCarePreview')),
  fraudflux: lazy(() => import('./FraudFluxPreview')),
  lumen: lazy(() => import('./LumenPreview')),
  studysprout: lazy(() => import('./StudySproutPreview')),
  insightgraph: lazy(() => import('./InsightGraphPreview')),
};