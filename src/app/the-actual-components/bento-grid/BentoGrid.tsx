'use client'
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
      '--left-col': `${leftColRatio}fr`,
      '--right-col1': `${(1 - leftColRatio) * rightCol1Frac}fr`,
      '--right-col2': `${(1 - leftColRatio) * rightCol2Frac}fr`,
      '--top-row': `${topRowRatio}fr`,
      '--bottom-row': `${bottomRowRatio}fr`,
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
      paddingStyle = `${paddingTop || padding} ${paddingRight || padding} ${paddingBottom || padding} ${paddingLeft || padding}`
    } else {
      paddingStyle = padding
    }

    return {
      background,
      border: `${borderWidth} solid ${borderColor}`,
      borderRadius: typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
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
      <style jsx>{`
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
      `}</style>
    </div>
  )
}