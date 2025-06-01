'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "BentoGrid.tsx" file
import BentoGrid from '@/app/the-actual-components/bento-grid/BentoGrid'

<BentoGrid
  mainAspect="9/16"
  leftColRatio={0.32}
  rightCol1={0.6}
  rightCol2={0.4}
  topRowRatio={0.65}
  bottomRowRatio={0.35}
  gap="20px"
  gridHeight="264px"
  cellBackground="#17161c"
  cellBorderColor="#33313d"
  cellBorderRadius="32px"
  cellBorderWidth="1px"
  cellPadding="16px"
  mainCellBorderColor="#7b1fa2"
  mainCellBorderRadius="32px"
  topCenterCellBackground="#060507"
  topRightCellBackground="#111014"
  bottomCellBackground="#4776cb"
  bottomCellBorderColor="#fff"
  bottomCellBorderRadius="8px"
  bottomCellBorderWidth="4px"
  onCellClick={(cell) => console.log('Clicked:', cell)}
  main={
    <div style={{ width: '100%', textAlign: 'center' }}>
      <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>Left (Main)</div>
    </div>
  }
  topCenter={
    <div style={{ width: '100%', textAlign: 'center' }}>
      <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>Top Center</div>
    </div>
  }
  topRight={
    <div style={{ width: '100%', textAlign: 'center' }}>
      <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>Top Right</div>
    </div>
  }
  bottom={
    <div style={{ width: '100%', textAlign: 'center' }}>
      <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>Bottom Right</div>
    </div>
  }
/>

// Note: The BentoGrid component accepts the following props:
// - mainAspect: string (optional) - Aspect ratio of the main (left) cell (default: '16/9').
// - leftColRatio: number (optional) - Fractional width of the left (main) cell (default: 0.6).
// - rightCol1: number (optional) - Proportion of the top-center cell (relative to right group, default: 0.5).
// - rightCol2: number (optional) - Proportion of the top-right cell (relative to right group, default: 0.5).
// - topRowRatio: number (optional) - Fractional height of the top row (default: 0.65).
// - bottomRowRatio: number (optional) - Fractional height of the bottom row (default: 0.35).
// - gap: string (optional) - Gap between grid cells (default: '16px').
// - gridHeight: string (optional) - Height of the grid (default: '100%').
// - cellBackground: string (optional) - Background color for all cells unless overridden (default: '#17161c').
// - cellBorderColor: string (optional) - Border color for all cells unless overridden (default: '#33313d').
// - cellBorderRadius: string | number (optional) - Border radius for all cells unless overridden (default: '8px').
// - cellBorderWidth: string | number (optional) - Border width for all cells unless overridden (default: '1px').
// - cellPadding: string (optional) - Padding for all cells unless overridden (default: '16px').
// - cellPaddingTop: string (optional) - Padding-top for all cells unless overridden.
// - cellPaddingRight: string (optional) - Padding-right for all cells unless overridden.
// - cellPaddingBottom: string (optional) - Padding-bottom for all cells unless overridden.
// - cellPaddingLeft: string (optional) - Padding-left for all cells unless overridden.
// - mainCellBackground: string (optional) - Background for the main (left) cell.
// - mainCellBorderColor: string (optional) - Border color for the main cell.
// - mainCellBorderRadius: string | number (optional) - Border radius for the main cell.
// - mainCellBorderWidth: string | number (optional) - Border width for the main cell.
// - mainCellPadding: string (optional) - Padding for the main cell.
// - mainCellPaddingTop: string (optional) - Padding-top for the main cell.
// - mainCellPaddingRight: string (optional) - Padding-right for the main cell.
// - mainCellPaddingBottom: string (optional) - Padding-bottom for the main cell.
// - mainCellPaddingLeft: string (optional) - Padding-left for the main cell.
// - topCenterCellBackground: string (optional) - Background for the top-center cell.
// - topCenterCellBorderColor: string (optional) - Border color for the top-center cell.
// - topCenterCellBorderRadius: string | number (optional) - Border radius for the top-center cell.
// - topCenterCellBorderWidth: string | number (optional) - Border width for the top-center cell.
// - topCenterCellPadding: string (optional) - Padding for the top-center cell.
// - topCenterCellPaddingTop: string (optional) - Padding-top for the top-center cell.
// - topCenterCellPaddingRight: string (optional) - Padding-right for the top-center cell.
// - topCenterCellPaddingBottom: string (optional) - Padding-bottom for the top-center cell.
// - topCenterCellPaddingLeft: string (optional) - Padding-left for the top-center cell.
// - topRightCellBackground: string (optional) - Background for the top-right cell.
// - topRightCellBorderColor: string (optional) - Border color for the top-right cell.
// - topRightCellBorderRadius: string | number (optional) - Border radius for the top-right cell.
// - topRightCellBorderWidth: string | number (optional) - Border width for the top-right cell.
// - topRightCellPadding: string (optional) - Padding for the top-right cell.
// - topRightCellPaddingTop: string (optional) - Padding-top for the top-right cell.
// - topRightCellPaddingRight: string (optional) - Padding-right for the top-right cell.
// - topRightCellPaddingBottom: string (optional) - Padding-bottom for the top-right cell.
// - topRightCellPaddingLeft: string (optional) - Padding-left for the top-right cell.
// - bottomCellBackground: string (optional) - Background for the bottom cell.
// - bottomCellBorderColor: string (optional) - Border color for the bottom cell.
// - bottomCellBorderRadius: string | number (optional) - Border radius for the bottom cell.
// - bottomCellBorderWidth: string | number (optional) - Border width for the bottom cell.
// - bottomCellPadding: string (optional) - Padding for the bottom cell.
// - bottomCellPaddingTop: string (optional) - Padding-top for the bottom cell.
// - bottomCellPaddingRight: string (optional) - Padding-right for the bottom cell.
// - bottomCellPaddingBottom: string (optional) - Padding-bottom for the bottom cell.
// - bottomCellPaddingLeft: string (optional) - Padding-left for the bottom cell.
// - main: ReactNode (optional) - Content for the main (left) cell.
// - topCenter: ReactNode (optional) - Content for the top-center cell.
// - topRight: ReactNode (optional) - Content for the top-right cell.
// - bottom: ReactNode (optional) - Content for the bottom cell.
// - onCellClick: (cell: 'main' | 'topCenter' | 'topRight' | 'bottom') => void (optional) - Callback when any cell is clicked.
`,
code: [
  {
    filename: 'BentoGrid.tsx',
    content: `'use client'
import React, { CSSProperties, ReactNode, useMemo } from 'react'

type CellType = 'main' | 'topCenter' | 'topRight' | 'bottom'

export interface BentoGridProps {
  mainAspect?: string
  leftColRatio?: number
  rightCol1?: number
  rightCol2?: number
  topRowRatio?: number
  bottomRowRatio?: number
  gap?: string
  gridHeight?: string

  // Global cell style props
  cellBackground?: string
  cellBorderColor?: string
  cellBorderRadius?: string | number
  cellBorderWidth?: string | number
  cellPadding?: string
  cellPaddingTop?: string
  cellPaddingRight?: string
  cellPaddingBottom?: string
  cellPaddingLeft?: string

  // Main cell overrides
  mainCellBackground?: string
  mainCellBorderColor?: string
  mainCellBorderRadius?: string | number
  mainCellBorderWidth?: string | number
  mainCellPadding?: string
  mainCellPaddingTop?: string
  mainCellPaddingRight?: string
  mainCellPaddingBottom?: string
  mainCellPaddingLeft?: string

  // Top center cell overrides
  topCenterCellBackground?: string
  topCenterCellBorderColor?: string
  topCenterCellBorderRadius?: string | number
  topCenterCellBorderWidth?: string | number
  topCenterCellPadding?: string
  topCenterCellPaddingTop?: string
  topCenterCellPaddingRight?: string
  topCenterCellPaddingBottom?: string
  topCenterCellPaddingLeft?: string

  // Top right cell overrides
  topRightCellBackground?: string
  topRightCellBorderColor?: string
  topRightCellBorderRadius?: string | number
  topRightCellBorderWidth?: string | number
  topRightCellPadding?: string
  topRightCellPaddingTop?: string
  topRightCellPaddingRight?: string
  topRightCellPaddingBottom?: string
  topRightCellPaddingLeft?: string

  // Bottom cell overrides
  bottomCellBackground?: string
  bottomCellBorderColor?: string
  bottomCellBorderRadius?: string | number
  bottomCellBorderWidth?: string | number
  bottomCellPadding?: string
  bottomCellPaddingTop?: string
  bottomCellPaddingRight?: string
  bottomCellPaddingBottom?: string
  bottomCellPaddingLeft?: string

  // Slots
  main?: ReactNode
  topCenter?: ReactNode
  topRight?: ReactNode
  bottom?: ReactNode

  // Events
  onCellClick?: (cell: CellType) => void
}

export default function BentoGrid({
  mainAspect = '16/9',
  leftColRatio = 0.6,
  rightCol1 = 0.5,
  rightCol2 = 0.5,
  topRowRatio = 0.65,
  bottomRowRatio = 0.35,
  gap = '16px',
  gridHeight = '100%',

  cellBackground = '#17161c',
  cellBorderColor = '#33313d',
  cellBorderRadius = '8px',
  cellBorderWidth = '1px',
  cellPadding = '16px',
  cellPaddingTop,
  cellPaddingRight,
  cellPaddingBottom,
  cellPaddingLeft,

  mainCellBackground,
  mainCellBorderColor,
  mainCellBorderRadius,
  mainCellBorderWidth,
  mainCellPadding,
  mainCellPaddingTop,
  mainCellPaddingRight,
  mainCellPaddingBottom,
  mainCellPaddingLeft,

  topCenterCellBackground,
  topCenterCellBorderColor,
  topCenterCellBorderRadius,
  topCenterCellBorderWidth,
  topCenterCellPadding,
  topCenterCellPaddingTop,
  topCenterCellPaddingRight,
  topCenterCellPaddingBottom,
  topCenterCellPaddingLeft,

  topRightCellBackground,
  topRightCellBorderColor,
  topRightCellBorderRadius,
  topRightCellBorderWidth,
  topRightCellPadding,
  topRightCellPaddingTop,
  topRightCellPaddingRight,
  topRightCellPaddingBottom,
  topRightCellPaddingLeft,

  bottomCellBackground,
  bottomCellBorderColor,
  bottomCellBorderRadius,
  bottomCellBorderWidth,
  bottomCellPadding,
  bottomCellPaddingTop,
  bottomCellPaddingRight,
  bottomCellPaddingBottom,
  bottomCellPaddingLeft,

  main,
  topCenter,
  topRight,
  bottom,

  onCellClick,
}: BentoGridProps) {
  const rightGroupTotal = rightCol1 + rightCol2
  const rightCol1Frac = rightCol1 / rightGroupTotal
  const rightCol2Frac = rightCol2 / rightGroupTotal

  const gridVars = useMemo(
    () => ({
      '--main-aspect': mainAspect,
      '--left-col': \`\${leftColRatio}fr\`,
      '--right-col1': \`\${(1 - leftColRatio) * rightCol1Frac}fr\`,
      '--right-col2': \`\${(1 - leftColRatio) * rightCol2Frac}fr\`,
      '--top-row': \`\${topRowRatio}fr\`,
      '--bottom-row': \`\${bottomRowRatio}fr\`,
      '--gap': gap,
      height: gridHeight,
    }),
    [mainAspect, leftColRatio, rightCol1Frac, rightCol2Frac, topRowRatio, bottomRowRatio, gap, gridHeight]
  )

  const getCellStyle = (cell: CellType): CSSProperties => {
    const background = (
      cell === 'main' ? mainCellBackground :
      cell === 'topCenter' ? topCenterCellBackground :
      cell === 'topRight' ? topRightCellBackground :
      bottomCellBackground
    ) || cellBackground

    const borderColor = (
      cell === 'main' ? mainCellBorderColor :
      cell === 'topCenter' ? topCenterCellBorderColor :
      cell === 'topRight' ? topRightCellBorderColor :
      bottomCellBorderColor
    ) || cellBorderColor

    const borderRadius = (
      cell === 'main' ? mainCellBorderRadius :
      cell === 'topCenter' ? topCenterCellBorderRadius :
      cell === 'topRight' ? topRightCellBorderRadius :
      bottomCellBorderRadius
    ) || cellBorderRadius

    const borderWidth = (
      cell === 'main' ? mainCellBorderWidth :
      cell === 'topCenter' ? topCenterCellBorderWidth :
      cell === 'topRight' ? topRightCellBorderWidth :
      bottomCellBorderWidth
    ) || cellBorderWidth

    const padding = (
      cell === 'main' ? mainCellPadding :
      cell === 'topCenter' ? topCenterCellPadding :
      cell === 'topRight' ? topRightCellPadding :
      bottomCellPadding
    ) || cellPadding

    const paddingTop = (
      cell === 'main' ? mainCellPaddingTop :
      cell === 'topCenter' ? topCenterCellPaddingTop :
      cell === 'topRight' ? topRightCellPaddingTop :
      bottomCellPaddingTop
    ) || cellPaddingTop

    const paddingRight = (
      cell === 'main' ? mainCellPaddingRight :
      cell === 'topCenter' ? topCenterCellPaddingRight :
      cell === 'topRight' ? topRightCellPaddingRight :
      bottomCellPaddingRight
    ) || cellPaddingRight

    const paddingBottom = (
      cell === 'main' ? mainCellPaddingBottom :
      cell === 'topCenter' ? topCenterCellPaddingBottom :
      cell === 'topRight' ? topRightCellPaddingBottom :
      bottomCellPaddingBottom
    ) || cellPaddingBottom

    const paddingLeft = (
      cell === 'main' ? mainCellPaddingLeft :
      cell === 'topCenter' ? topCenterCellPaddingLeft :
      cell === 'topRight' ? topRightCellPaddingLeft :
      bottomCellPaddingLeft
    ) || cellPaddingLeft

    let paddingStyle: string | undefined
    if (
      paddingTop !== undefined ||
      paddingRight !== undefined ||
      paddingBottom !== undefined ||
      paddingLeft !== undefined
    ) {
      paddingStyle = \`\${paddingTop || padding} \${paddingRight || padding} \${paddingBottom || padding} \${paddingLeft || padding}\`
    } else {
      paddingStyle = padding
    }

    return {
      background,
      border: \`\${borderWidth} solid \${borderColor}\`,
      borderRadius: typeof borderRadius === 'number' ? \`\${borderRadius}px\` : borderRadius,
      padding: paddingStyle,
    }
  }

  const handleCellClick = (cell: CellType) => {
    onCellClick?.(cell)
  }

  return (
    <div
      className="bento-grid"
      style={gridVars as React.CSSProperties}
    >
      <div
        className="cell cell-main"
        style={getCellStyle('main')}
        onClick={() => handleCellClick('main')}
      >
        {main}
      </div>
      <div
        className="cell cell-top-left"
        style={getCellStyle('topCenter')}
        onClick={() => handleCellClick('topCenter')}
      >
        {topCenter}
      </div>
      <div
        className="cell cell-top-right"
        style={getCellStyle('topRight')}
        onClick={() => handleCellClick('topRight')}
      >
        {topRight}
      </div>
      <div
        className="cell cell-bottom"
        style={getCellStyle('bottom')}
        onClick={() => handleCellClick('bottom')}
      >
        {bottom}
      </div>
      <style jsx>{\`
        .bento-grid {
          width: 100%;
          min-height: 0;
          min-width: 0;
          box-sizing: border-box;
          display: grid;
          gap: var(--gap, 16px);
          grid-template-areas:
            "main topCenter topRight"
            "main bottom bottom";
          grid-template-columns:
            minmax(0, var(--left-col, 0.6fr))
            minmax(0, var(--right-col1, 0.2fr))
            minmax(0, var(--right-col2, 0.2fr));
          grid-template-rows:
            minmax(0, var(--top-row, 0.65fr))
            minmax(0, var(--bottom-row, 0.35fr));
        }
        .cell {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 0;
          min-height: 0;
          box-sizing: border-box;
          overflow: hidden;
          color: #fff;
        }
        .cell-main {
          grid-area: main;
          aspect-ratio: var(--main-aspect, 16/9);
          width: 100%;
          height: 100%;
          align-self: stretch;
          justify-self: stretch;
        }
        .cell-top-left {
          grid-area: topCenter;
          width: 100%;
          height: 100%;
          align-self: stretch;
          justify-self: stretch;
        }
        .cell-top-right {
          grid-area: topRight;
          width: 100%;
          height: 100%;
          align-self: stretch;
          justify-self: stretch;
        }
        .cell-bottom {
          grid-area: bottom;
          width: 100%;
          height: 100%;
          align-self: stretch;
          justify-self: stretch;
        }
      \`}</style>
    </div>
  )
}
`
  },
],
  dependencies: '',
  credit: (
    <span>
      <a href="https://animata.design/docs/bento-grid/gradient" target="_blank" rel="noopener noreferrer" className="link">Gradient</a> by <a href="https://animata.design/" target="_blank" rel="noopener noreferrer" className="link">ANIMATA DESIGN</a>
    </span>
  ),
}

export { metadata }