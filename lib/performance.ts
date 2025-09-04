'use client'

// Performance monitoring utilities
export const performanceMonitor = {
  // Measure component render time
  measureRender: (componentName: string) => {
    if (typeof window !== 'undefined' && window.performance) {
      const start = performance.now()
      return () => {
        const end = performance.now()
        console.log(`${componentName} render time: ${(end - start).toFixed(2)}ms`)
      }
    }
    return () => {}
  },

  // Measure 3D scene load time
  measure3DLoad: (sceneName: string) => {
    if (typeof window !== 'undefined' && window.performance) {
      const start = performance.now()
      return () => {
        const end = performance.now()
        console.log(`${sceneName} 3D load time: ${(end - start).toFixed(2)}ms`)
      }
    }
    return () => {}
  },

  // Get memory usage (if available)
  getMemoryUsage: () => {
    if (typeof window !== 'undefined' && 'memory' in performance) {
      const memory = (performance as any).memory
      return {
        used: Math.round(memory.usedJSHeapSize / 1048576), // MB
        total: Math.round(memory.totalJSHeapSize / 1048576), // MB
        limit: Math.round(memory.jsHeapSizeLimit / 1048576), // MB
      }
    }
    return null
  },

  // Log performance metrics
  logMetrics: () => {
    const memory = performanceMonitor.getMemoryUsage()
    if (memory) {
      console.log('Memory Usage:', memory)
    }
    
    // Log navigation timing
    if (typeof window !== 'undefined' && window.performance) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigation) {
        console.log('Page Load Time:', {
          domContentLoaded: Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart),
          loadComplete: Math.round(navigation.loadEventEnd - navigation.loadEventStart),
          total: Math.round(navigation.loadEventEnd - navigation.fetchStart),
        })
      }
    }
  }
}

// Hook for performance monitoring
export function usePerformanceMonitor(componentName: string) {
  const measureRender = performanceMonitor.measureRender(componentName)
  
  return {
    measureRender,
    logMetrics: performanceMonitor.logMetrics,
    getMemoryUsage: performanceMonitor.getMemoryUsage,
  }
}
