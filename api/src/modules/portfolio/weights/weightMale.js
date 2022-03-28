export const weightMale = async (month, size, result) => {
  if (month === 0) {
    if (size <= 44.2) {
      result = 0
    } else if ((44.2 < size) && (size <= 46.1)) {
      result = 1
    } else if ((46.1 < size) && (size <= 48)) {
      result = 2
    } else if ((48 < size) && (size <= 49.9)) {
      result = 3
    } else if ((49.9 < size) && (size <= 51.8)) {
      result = 2
    } else if ((51.8 < size) && (size <= 53.7)) {
      result = 2
    } else if ((53.7 < size) && (size < 55.6)) {
      result = 4
    }
    return result
  }
  if (month === 1) {
    if (size <= 48.9) {
      result = 0
    } else if ((48.9 < size) && (size <= 50.8)) {
      result = 1
    } else if ((50.8 < size) && (size <= 52.8)) {
      result = 2
    } else if ((52.8 < size) && (size <= 54.7)) {
      result = 3
    } else if ((54.7 < size) && (size <= 56.7)) {
      result = 2
    } else if ((56.7 < size) && (size <= 58.6)) {
      result = 2
    } else if ((58.6 < size) && (size < 60.6)) {
      result = 4
    }
    return result
  }
  if (month === 2) {
    if (size <= 52.4) {
      result = 0
    } else if ((52.4 < size) && (size <= 54.4)) {
      result = 1
    } else if ((54.4 < size) && (size <= 56.4)) {
      result = 2
    } else if ((56.4 < size) && (size <= 58.4)) {
      result = 3
    } else if ((58.4 < size) && (size <= 60.4)) {
      result = 2
    } else if ((60.4 < size) && (size <= 62.4)) {
      result = 2
    } else if ((62.4 < size) && (size < 64.4)) {
      result = 4
    }
    return result
  }
  if (month === 3) {
    if (size <= 55.3) {
      result = 0
    } else if ((55.3 < size) && (size <= 57.3)) {
      result = 1
    } else if ((57.3 < size) && (size <= 59.4)) {
      result = 2
    } else if ((59.4 < size) && (size <= 61.4)) {
      result = 3
    } else if ((61.4 < size) && (size <= 63.5)) {
      result = 2
    } else if ((63.5 < size) && (size <= 65.5)) {
      result = 2
    } else if ((65.5 < size) && (size < 67.6)) {
      result = 4
    }
    return result
  }
  if (month === 4) {
    if (size <= 57.6) {
      result = 0
    } else if ((57.6 < size) && (size <= 59.7)) {
      result = 1
    } else if ((59.7 < size) && (size <= 61.8)) {
      result = 2
    } else if ((61.8 < size) && (size <= 63.9)) {
      result = 3
    } else if ((63.9 < size) && (size <= 66)) {
      result = 2
    } else if ((66 < size) && (size <= 68)) {
      result = 2
    } else if ((68 < size) && (size < 70.1)) {
      result = 4
    }
    return result
  }
  if (month === 5) {
    if (size <= 59.6) {
      result = 0
    } else if ((59.6 < size) && (size <= 61.7)) {
      result = 1
    } else if ((61.7 < size) && (size <= 63.8)) {
      result = 2
    } else if ((63.8 < size) && (size <= 65.9)) {
      result = 3
    } else if ((65.9 < size) && (size <= 68)) {
      result = 2
    } else if ((68 < size) && (size <= 70.1)) {
      result = 2
    } else if ((70.1 < size) && (size < 72.2)) {
      result = 4
    }
    return result
  }
  if (month === 6) {
    if (size <= 61.2) {
      result = 0
    } else if ((61.2 < size) && (size <= 63.3)) {
      result = 1
    } else if ((63.3 < size) && (size <= 65.5)) {
      result = 2
    } else if ((65.5 < size) && (size <= 67.6)) {
      result = 3
    } else if ((67.6 < size) && (size <= 69.8)) {
      result = 2
    } else if ((69.8 < size) && (size <= 71.9)) {
      result = 2
    } else if ((71.9 < size) && (size < 74)) {
      result = 4
    }
    return result
  }
  if (month === 7) {
    if (size <= 62.7) {
      result = 0
    } else if ((62.7 < size) && (size <= 64.8)) {
      result = 1
    } else if ((64.8 < size) && (size <= 67)) {
      result = 2
    } else if ((67 < size) && (size <= 69.2)) {
      result = 3
    } else if ((69.2 < size) && (size <= 71.3)) {
      result = 2
    } else if ((71.3 < size) && (size <= 73.5)) {
      result = 2
    } else if ((73.5 < size) && (size < 75.7)) {
      result = 4
    }
    return result
  }
  if (month === 8) {
    if (size <= 64) {
      result = 0
    } else if ((64 < size) && (size <= 66.2)) {
      result = 1
    } else if ((66.2 < size) && (size <= 68.4)) {
      result = 2
    } else if ((68.4 < size) && (size <= 70.6)) {
      result = 3
    } else if ((70.6 < size) && (size <= 72.8)) {
      result = 2
    } else if ((72.8 < size) && (size <= 75)) {
      result = 2
    } else if ((75 < size) && (size < 77.2)) {
      result = 4
    }
    return result
  }
  if (month === 9) {
    if (size <= 65.2) {
      result = 0
    } else if ((65.2 < size) && (size <= 67.5)) {
      result = 1
    } else if ((67.5 < size) && (size <= 69.7)) {
      result = 2
    } else if ((69.7 < size) && (size <= 72)) {
      result = 3
    } else if ((72 < size) && (size <= 74.2)) {
      result = 2
    } else if ((74.2 < size) && (size <= 76.5)) {
      result = 2
    } else if ((76.5 < size) && (size < 78.7)) {
      result = 4
    }
    return result
  }
  if (month === 10) {
    if (size <= 66.4) {
      result = 0
    } else if ((66.4 < size) && (size <= 68.7)) {
      result = 1
    } else if ((68.7 < size) && (size <= 71)) {
      result = 2
    } else if ((71 < size) && (size <= 73.3)) {
      result = 3
    } else if ((73.3 < size) && (size <= 75.6)) {
      result = 2
    } else if ((75.6 < size) && (size <= 77.9)) {
      result = 2
    } else if ((77.9 < size) && (size < 80.1)) {
      result = 4
    }
    return result
  }
  if (month === 11) {
    if (size <= 67.6) {
      result = 0
    } else if ((67.6 < size) && (size <= 69.9)) {
      result = 1
    } else if ((69.9 < size) && (size <= 72.2)) {
      result = 2
    } else if ((72.2 < size) && (size <= 74.5)) {
      result = 3
    } else if ((74.5 < size) && (size <= 76.9)) {
      result = 2
    } else if ((76.9 < size) && (size <= 79.2)) {
      result = 2
    } else if ((79.2 < size) && (size < 81.5)) {
      result = 4
    }
    return result
  }
  if (month === 12) {
    if (size <= 68.6) {
      result = 0
    } else if ((68.6 < size) && (size <= 71)) {
      result = 1
    } else if ((71 < size) && (size <= 73.4)) {
      result = 2
    } else if ((73.4 < size) && (size <= 75.7)) {
      result = 3
    } else if ((75.7 < size) && (size <= 78.1)) {
      result = 2
    } else if ((78.1 < size) && (size <= 80.5)) {
      result = 2
    } else if ((80.5 < size) && (size < 82.9)) {
      result = 4
    }
    return result
  }
  if (month === 13) {
    if (size <= 69.6) {
      result = 0
    } else if ((69.6 < size) && (size <= 72.1)) {
      result = 1
    } else if ((72.1 < size) && (size <= 74.5)) {
      result = 2
    } else if ((74.5 < size) && (size <= 76.9)) {
      result = 3
    } else if ((76.9 < size) && (size <= 79.3)) {
      result = 2
    } else if ((79.3 < size) && (size <= 81.8)) {
      result = 2
    } else if ((81.8 < size) && (size < 84.2)) {
      result = 4
    }
    return result
  }
  if (month === 14) {
    if (size <= 70.6) {
      result = 0
    } else if ((70.6 < size) && (size <= 73.1)) {
      result = 1
    } else if ((73.1 < size) && (size <= 75.6)) {
      result = 2
    } else if ((75.6 < size) && (size <= 78)) {
      result = 3
    } else if ((78 < size) && (size <= 80.5)) {
      result = 2
    } else if ((80.5 < size) && (size <= 83)) {
      result = 2
    } else if ((83 < size) && (size < 85.5)) {
      result = 4
    }
    return result
  }
  if (month === 15) {
    if (size <= 71.6) {
      result = 0
    } else if ((71.6 < size) && (size <= 74.1)) {
      result = 1
    } else if ((74.1 < size) && (size <= 76.6)) {
      result = 2
    } else if ((76.6 < size) && (size <= 79.1)) {
      result = 3
    } else if ((79.1 < size) && (size <= 81.7)) {
      result = 2
    } else if ((81.7 < size) && (size <= 84.2)) {
      result = 2
    } else if ((84.2 < size) && (size < 86.7)) {
      result = 4
    }
    return result
  }
  if (month === 16) {
    if (size <= 72.5) {
      result = 0
    } else if ((72.5 < size) && (size <= 75)) {
      result = 1
    } else if ((75 < size) && (size <= 77.6)) {
      result = 2
    } else if ((77.6 < size) && (size <= 80.2)) {
      result = 3
    } else if ((80.2 < size) && (size <= 82.8)) {
      result = 2
    } else if ((82.8 < size) && (size <= 85.4)) {
      result = 2
    } else if ((85.4 < size) && (size < 88)) {
      result = 4
    }
    return result
  }
  if (month === 17) {
    if (size <= 73.3) {
      result = 0
    } else if ((73.3 < size) && (size <= 76)) {
      result = 1
    } else if ((76 < size) && (size <= 78.6)) {
      result = 2
    } else if ((78.6 < size) && (size <= 81.2)) {
      result = 3
    } else if ((81.2 < size) && (size <= 83.9)) {
      result = 2
    } else if ((83.9 < size) && (size <= 86.5)) {
      result = 2
    } else if ((86.5 < size) && (size < 89.2)) {
      result = 4
    }
    return result
  }
  if (month === 18) {
    if (size <= 74.2) {
      result = 0
    } else if ((74.2 < size) && (size <= 76.9)) {
      result = 1
    } else if ((76.9 < size) && (size <= 79.6)) {
      result = 2
    } else if ((79.6 < size) && (size <= 82.3)) {
      result = 3
    } else if ((82.3 < size) && (size <= 85)) {
      result = 2
    } else if ((85 < size) && (size <= 87.7)) {
      result = 2
    } else if ((87.7 < size) && (size < 90.4)) {
      result = 4
    }
    return result
  }
  if (month === 19) {
    if (size <= 75) {
      result = 0
    } else if ((75 < size) && (size <= 77.7)) {
      result = 1
    } else if ((77.7 < size) && (size <= 80.5)) {
      result = 2
    } else if ((80.5 < size) && (size <= 83.2)) {
      result = 3
    } else if ((83.2 < size) && (size <= 86)) {
      result = 2
    } else if ((86 < size) && (size <= 88.8)) {
      result = 2
    } else if ((88.8 < size) && (size < 91.5)) {
      result = 4
    }
    return result
  }
  if (month === 20) {
    if (size <= 75.8) {
      result = 0
    } else if ((75.8 < size) && (size <= 78.6)) {
      result = 1
    } else if ((78.6 < size) && (size <= 81.4)) {
      result = 2
    } else if ((81.4 < size) && (size <= 84.2)) {
      result = 3
    } else if ((84.2 < size) && (size <= 87)) {
      result = 2
    } else if ((87 < size) && (size <= 89.8)) {
      result = 2
    } else if ((89.8 < size) && (size < 92.6)) {
      result = 4
    }
    return result
  }
  if (month === 21) {
    if (size <= 76.5) {
      result = 0
    } else if ((76.5 < size) && (size <= 79.4)) {
      result = 1
    } else if ((79.4 < size) && (size <= 82.3)) {
      result = 2
    } else if ((82.3 < size) && (size <= 85.1)) {
      result = 3
    } else if ((85.1 < size) && (size <= 88)) {
      result = 2
    } else if ((88 < size) && (size <= 90.9)) {
      result = 2
    } else if ((90.9 < size) && (size < 93.8)) {
      result = 4
    }
    return result
  }
  if (month === 22) {
    if (size <= 77.2) {
      result = 0
    } else if ((77.2 < size) && (size <= 80.2)) {
      result = 1
    } else if ((80.2 < size) && (size <= 83.1)) {
      result = 2
    } else if ((83.1 < size) && (size <= 86)) {
      result = 3
    } else if ((86 < size) && (size <= 89)) {
      result = 2
    } else if ((89 < size) && (size <= 91.9)) {
      result = 2
    } else if ((91.9 < size) && (size < 94.9)) {
      result = 4
    }
    return result
  }
  if (month === 23) {
    if (size <= 78) {
      result = 0
    } else if ((78 < size) && (size <= 81)) {
      result = 1
    } else if ((81 < size) && (size <= 83.9)) {
      result = 2
    } else if ((83.9 < size) && (size <= 86.9)) {
      result = 3
    } else if ((86.9 < size) && (size <= 89.9)) {
      result = 2
    } else if ((89.9 < size) && (size <= 92.9)) {
      result = 2
    } else if ((92.9 < size) && (size < 95.9)) {
      result = 4
    }
    return result
  }
  if (month === 24) {
    if (size <= 78.7) {
      result = 0
    } else if ((78.7 < size) && (size <= 81.7)) {
      result = 1
    } else if ((81.7 < size) && (size <= 84.8)) {
      result = 2
    } else if ((84.8 < size) && (size <= 87.8)) {
      result = 3
    } else if ((87.8 < size) && (size <= 90.9)) {
      result = 2
    } else if ((90.9 < size) && (size <= 93.9)) {
      result = 2
    } else if ((93.9 < size) && (size < 97)) {
      result = 4
    }
    return result
  }
  if (month === 25) {
    if (size <= 78.6) {
      result = 0
    } else if ((78.6 < size) && (size <= 81.7)) {
      result = 1
    } else if ((81.7 < size) && (size <= 84.9)) {
      result = 2
    } else if ((84.9 < size) && (size <= 88)) {
      result = 3
    } else if ((88 < size) && (size <= 91.1)) {
      result = 2
    } else if ((91.1 < size) && (size <= 94.2)) {
      result = 2
    } else if ((94.2 < size) && (size < 97.3)) {
      result = 4
    }
    return result
  }
  if (month === 26) {
    if (size <= 79.3) {
      result = 0
    } else if ((79.3 < size) && (size <= 82.5)) {
      result = 1
    } else if ((82.5 < size) && (size <= 85.6)) {
      result = 2
    } else if ((85.6 < size) && (size <= 88.8)) {
      result = 3
    } else if ((88.8 < size) && (size <= 92)) {
      result = 2
    } else if ((92 < size) && (size <= 95.2)) {
      result = 2
    } else if ((95.2 < size) && (size < 98.3)) {
      result = 4
    }
    return result
  }
  if (month === 27) {
    if (size <= 79.9) {
      result = 0
    } else if ((79.9 < size) && (size <= 83.1)) {
      result = 1
    } else if ((83.1 < size) && (size <= 86.4)) {
      result = 2
    } else if ((86.4 < size) && (size <= 89.6)) {
      result = 3
    } else if ((89.6 < size) && (size <= 92.9)) {
      result = 2
    } else if ((92.9 < size) && (size <= 96.1)) {
      result = 2
    } else if ((96.1 < size) && (size < 99.3)) {
      result = 4
    }
    return result
  }
  if (month === 28) {
    if (size <= 80.5) {
      result = 0
    } else if ((80.5 < size) && (size <= 83.8)) {
      result = 1
    } else if ((83.8 < size) && (size <= 87.1)) {
      result = 2
    } else if ((87.1 < size) && (size <= 90.4)) {
      result = 3
    } else if ((90.4 < size) && (size <= 93.7)) {
      result = 2
    } else if ((93.7 < size) && (size <= 97)) {
      result = 2
    } else if ((97 < size) && (size < 100.3)) {
      result = 4
    }
    return result
  }
  if (month === 29) {
    if (size <= 81.1) {
      result = 0
    } else if ((81.1 < size) && (size <= 84.5)) {
      result = 1
    } else if ((84.5 < size) && (size <= 87.8)) {
      result = 2
    } else if ((87.8 < size) && (size <= 91.2)) {
      result = 3
    } else if ((91.2 < size) && (size <= 94.5)) {
      result = 2
    } else if ((94.5 < size) && (size <= 97.9)) {
      result = 2
    } else if ((97.9 < size) && (size < 101.2)) {
      result = 4
    }
    return result
  }
  if (month === 30) {
    if (size <= 81.7) {
      result = 0
    } else if ((81.7 < size) && (size <= 85.1)) {
      result = 1
    } else if ((85.1 < size) && (size <= 88.5)) {
      result = 2
    } else if ((88.5 < size) && (size <= 91.9)) {
      result = 3
    } else if ((91.9 < size) && (size <= 95.3)) {
      result = 2
    } else if ((95.3 < size) && (size <= 98.7)) {
      result = 2
    } else if ((98.7 < size) && (size < 102.1)) {
      result = 4
    }
    return result
  }
  if (month === 31) {
    if (size <= 82.3) {
      result = 0
    } else if ((82.3 < size) && (size <= 85.7)) {
      result = 1
    } else if ((85.7 < size) && (size <= 89.2)) {
      result = 2
    } else if ((89.2 < size) && (size <= 92.7)) {
      result = 3
    } else if ((92.7 < size) && (size <= 96.1)) {
      result = 2
    } else if ((96.1 < size) && (size <= 99.6)) {
      result = 2
    } else if ((99.6 < size) && (size < 103)) {
      result = 4
    }
    return result
  }
  if (month === 32) {
    if (size <= 82.8) {
      result = 0
    } else if ((82.8 < size) && (size <= 86.4)) {
      result = 1
    } else if ((86.4 < size) && (size <= 89.9)) {
      result = 2
    } else if ((89.9 < size) && (size <= 93.4)) {
      result = 3
    } else if ((93.4 < size) && (size <= 96.9)) {
      result = 2
    } else if ((96.9 < size) && (size <= 100.4)) {
      result = 2
    } else if ((100.4 < size) && (size < 103.9)) {
      result = 4
    }
    return result
  }
  if (month === 33) {
    if (size <= 83.4) {
      result = 0
    } else if ((83.4 < size) && (size <= 86.9)) {
      result = 1
    } else if ((86.9 < size) && (size <= 90.5)) {
      result = 2
    } else if ((90.5 < size) && (size <= 94.1)) {
      result = 3
    } else if ((94.1 < size) && (size <= 97.6)) {
      result = 2
    } else if ((97.6 < size) && (size <= 101.2)) {
      result = 2
    } else if ((101.2 < size) && (size < 104.8)) {
      result = 4
    }
    return result
  }
  if (month === 34) {
    if (size <= 83.9) {
      result = 0
    } else if ((83.9 < size) && (size <= 87.5)) {
      result = 1
    } else if ((87.5 < size) && (size <= 91.1)) {
      result = 2
    } else if ((91.1 < size) && (size <= 94.8)) {
      result = 3
    } else if ((94.8 < size) && (size <= 98.4)) {
      result = 2
    } else if ((98.4 < size) && (size <= 102)) {
      result = 2
    } else if ((102 < size) && (size < 105.6)) {
      result = 4
    }
    return result
  }
  if (month === 35) {
    if (size <= 84.4) {
      result = 0
    } else if ((84.4 < size) && (size <= 88.1)) {
      result = 1
    } else if ((88.1 < size) && (size <= 91.8)) {
      result = 2
    } else if ((91.8 < size) && (size <= 95.4)) {
      result = 3
    } else if ((95.4 < size) && (size <= 99.1)) {
      result = 2
    } else if ((99.1 < size) && (size <= 102.7)) {
      result = 2
    } else if ((102.7 < size) && (size < 106.4)) {
      result = 4
    }
    return result
  }
  if (month === 36) {
    if (size <= 85) {
      result = 0
    } else if ((85 < size) && (size <= 88.7)) {
      result = 1
    } else if ((88.7 < size) && (size <= 92.4)) {
      result = 2
    } else if ((92.4 < size) && (size <= 96.1)) {
      result = 3
    } else if ((96.1 < size) && (size <= 99.8)) {
      result = 2
    } else if ((99.8 < size) && (size <= 103.5)) {
      result = 2
    } else if ((103.5 < size) && (size < 107.2)) {
      result = 4
    }
    return result
  }
  if (month === 37) {
    if (size <= 85.5) {
      result = 0
    } else if ((85.5 < size) && (size <= 89.2)) {
      result = 1
    } else if ((89.2 < size) && (size <= 93)) {
      result = 2
    } else if ((93 < size) && (size <= 96.7)) {
      result = 3
    } else if ((96.7 < size) && (size <= 100.5)) {
      result = 2
    } else if ((100.5 < size) && (size <= 104.2)) {
      result = 2
    } else if ((104.2 < size) && (size < 108)) {
      result = 4
    }
    return result
  }
  if (month === 38) {
    if (size <= 86) {
      result = 0
    } else if ((86 < size) && (size <= 89.8)) {
      result = 1
    } else if ((89.8 < size) && (size <= 93.6)) {
      result = 2
    } else if ((93.6 < size) && (size <= 97.4)) {
      result = 3
    } else if ((97.4 < size) && (size <= 101.2)) {
      result = 2
    } else if ((101.2 < size) && (size <= 105)) {
      result = 2
    } else if ((105 < size) && (size < 108.8)) {
      result = 4
    }
    return result
  }
  if (month === 39) {
    if (size <= 86.5) {
      result = 0
    } else if ((86.5 < size) && (size <= 90.3)) {
      result = 1
    } else if ((90.3 < size) && (size <= 94.2)) {
      result = 2
    } else if ((94.2 < size) && (size <= 98)) {
      result = 3
    } else if ((98 < size) && (size <= 101.8)) {
      result = 2
    } else if ((101.8 < size) && (size <= 105.7)) {
      result = 2
    } else if ((105.7 < size) && (size < 109.5)) {
      result = 4
    }
    return result
  }
  if (month === 40) {
    if (size <= 87) {
      result = 0
    } else if ((87 < size) && (size <= 90.9)) {
      result = 1
    } else if ((90.9 < size) && (size <= 94.7)) {
      result = 2
    } else if ((94.7 < size) && (size <= 98.6)) {
      result = 3
    } else if ((98.6 < size) && (size <= 102.5)) {
      result = 2
    } else if ((102.5 < size) && (size <= 106.4)) {
      result = 2
    } else if ((106.4 < size) && (size < 110.3)) {
      result = 4
    }
    return result
  }
  if (month === 41) {
    if (size <= 87.5) {
      result = 0
    } else if ((87.5 < size) && (size <= 91.4)) {
      result = 1
    } else if ((91.4 < size) && (size <= 95.3)) {
      result = 2
    } else if ((95.3 < size) && (size <= 99.2)) {
      result = 3
    } else if ((99.2 < size) && (size <= 103.2)) {
      result = 2
    } else if ((103.2 < size) && (size <= 107.1)) {
      result = 2
    } else if ((107.1 < size) && (size < 111)) {
      result = 4
    }
    return result
  }
  if (month === 42) {
    if (size <= 88) {
      result = 0
    } else if ((88 < size) && (size <= 91.9)) {
      result = 1
    } else if ((91.9 < size) && (size <= 95.9)) {
      result = 2
    } else if ((95.9 < size) && (size <= 99.9)) {
      result = 3
    } else if ((99.9 < size) && (size <= 103.8)) {
      result = 2
    } else if ((103.8 < size) && (size <= 107.8)) {
      result = 2
    } else if ((107.8 < size) && (size < 111.7)) {
      result = 4
    }
    return result
  }
  if (month === 43) {
    if (size <= 88.4) {
      result = 0
    } else if ((88.4 < size) && (size <= 92.4)) {
      result = 1
    } else if ((92.4 < size) && (size <= 96.4)) {
      result = 2
    } else if ((96.4 < size) && (size <= 100.4)) {
      result = 3
    } else if ((100.4 < size) && (size <= 104.5)) {
      result = 2
    } else if ((104.5 < size) && (size <= 108.5)) {
      result = 2
    } else if ((108.5 < size) && (size < 112.5)) {
      result = 4
    }
    return result
  }
  if (month === 44) {
    if (size <= 88.9) {
      result = 0
    } else if ((88.9 < size) && (size <= 93)) {
      result = 1
    } else if ((93 < size) && (size <= 97)) {
      result = 2
    } else if ((97 < size) && (size <= 101)) {
      result = 3
    } else if ((101 < size) && (size <= 105.1)) {
      result = 2
    } else if ((105.1 < size) && (size <= 109.1)) {
      result = 2
    } else if ((109.1 < size) && (size < 113.2)) {
      result = 4
    }
    return result
  }
  if (month === 45) {
    if (size <= 89.4) {
      result = 0
    } else if ((89.4 < size) && (size <= 93.5)) {
      result = 1
    } else if ((93.5 < size) && (size <= 97.5)) {
      result = 2
    } else if ((97.5 < size) && (size <= 101.6)) {
      result = 3
    } else if ((101.6 < size) && (size <= 105.7)) {
      result = 2
    } else if ((105.7 < size) && (size <= 109.8)) {
      result = 2
    } else if ((109.8 < size) && (size < 113.9)) {
      result = 4
    }
    return result
  }
  if (month === 46) {
    if (size <= 89.8) {
      result = 0
    } else if ((89.8 < size) && (size <= 94)) {
      result = 1
    } else if ((94 < size) && (size <= 98.1)) {
      result = 2
    } else if ((98.1 < size) && (size <= 102.2)) {
      result = 3
    } else if ((102.2 < size) && (size <= 106.3)) {
      result = 2
    } else if ((106.3 < size) && (size <= 110.4)) {
      result = 2
    } else if ((110.4 < size) && (size < 114.6)) {
      result = 4
    }
    return result
  }
  if (month === 47) {
    if (size <= 90.3) {
      result = 0
    } else if ((90.3 < size) && (size <= 94.4)) {
      result = 1
    } else if ((94.4 < size) && (size <= 98.6)) {
      result = 2
    } else if ((98.6 < size) && (size <= 102.8)) {
      result = 3
    } else if ((102.8 < size) && (size <= 106.9)) {
      result = 2
    } else if ((106.9 < size) && (size <= 111.1)) {
      result = 2
    } else if ((111.1 < size) && (size < 115.2)) {
      result = 4
    }
    return result
  }
  if (month === 48) {
    if (size <= 90.7) {
      result = 0
    } else if ((90.7 < size) && (size <= 94.9)) {
      result = 1
    } else if ((94.9 < size) && (size <= 99.1)) {
      result = 2
    } else if ((99.1 < size) && (size <= 103.3)) {
      result = 3
    } else if ((103.3 < size) && (size <= 107.5)) {
      result = 2
    } else if ((107.5 < size) && (size <= 111.7)) {
      result = 2
    } else if ((111.7 < size) && (size < 115.9)) {
      result = 4
    }
    return result
  }
  if (month === 49) {
    if (size <= 91.2) {
      result = 0
    } else if ((91.2 < size) && (size <= 95.4)) {
      result = 1
    } else if ((95.4 < size) && (size <= 99.7)) {
      result = 2
    } else if ((99.7 < size) && (size <= 103.9)) {
      result = 3
    } else if ((103.9 < size) && (size <= 108.1)) {
      result = 2
    } else if ((108.1 < size) && (size <= 112.4)) {
      result = 2
    } else if ((112.4 < size) && (size < 116.6)) {
      result = 4
    }
    return result
  }
  if (month === 50) {
    if (size <= 91.6) {
      result = 0
    } else if ((91.6 < size) && (size <= 95.9)) {
      result = 1
    } else if ((95.9 < size) && (size <= 100.2)) {
      result = 2
    } else if ((100.2 < size) && (size <= 104.4)) {
      result = 3
    } else if ((104.4 < size) && (size <= 108.2)) {
      result = 2
    } else if ((108.2 < size) && (size <= 113)) {
      result = 2
    } else if ((113 < size) && (size < 117.3)) {
      result = 4
    }
    return result
  }
  if (month === 51) {
    if (size <= 92.1) {
      result = 0
    } else if ((92.1 < size) && (size <= 96.4)) {
      result = 1
    } else if ((96.4 < size) && (size <= 100.7)) {
      result = 2
    } else if ((100.7 < size) && (size <= 105)) {
      result = 3
    } else if ((105 < size) && (size <= 109.3)) {
      result = 2
    } else if ((109.3 < size) && (size <= 113.6)) {
      result = 2
    } else if ((113.6 < size) && (size < 117.9)) {
      result = 4
    }
    return result
  }
  if (month === 52) {
    if (size <= 92.5) {
      result = 0
    } else if ((92.5 < size) && (size <= 96.9)) {
      result = 1
    } else if ((96.9 < size) && (size <= 101.2)) {
      result = 2
    } else if ((101.2 < size) && (size <= 105.6)) {
      result = 3
    } else if ((105.6 < size) && (size <= 109.9)) {
      result = 2
    } else if ((109.9 < size) && (size <= 114.2)) {
      result = 2
    } else if ((114.2 < size) && (size < 118.6)) {
      result = 4
    }
    return result
  }
  if (month === 53) {
    if (size <= 93) {
      result = 0
    } else if ((93 < size) && (size <= 97.4)) {
      result = 1
    } else if ((97.4 < size) && (size <= 101.7)) {
      result = 2
    } else if ((101.7 < size) && (size <= 106.1)) {
      result = 3
    } else if ((106.1 < size) && (size <= 110.5)) {
      result = 2
    } else if ((110.5 < size) && (size <= 114.9)) {
      result = 2
    } else if ((114.9 < size) && (size < 119.2)) {
      result = 4
    }
    return result
  }
  if (month === 54) {
    if (size <= 93.4) {
      result = 0
    } else if ((93.4 < size) && (size <= 97.8)) {
      result = 1
    } else if ((97.8 < size) && (size <= 102.3)) {
      result = 2
    } else if ((102.3 < size) && (size <= 106.7)) {
      result = 3
    } else if ((106.7 < size) && (size <= 111.1)) {
      result = 2
    } else if ((111.1 < size) && (size <= 115.5)) {
      result = 2
    } else if ((115.5 < size) && (size < 119.9)) {
      result = 4
    }
    return result
  }
  if (month === 55) {
    if (size <= 93.9) {
      result = 0
    } else if ((93.9 < size) && (size <= 98.3)) {
      result = 1
    } else if ((98.3 < size) && (size <= 102.8)) {
      result = 2
    } else if ((102.8 < size) && (size <= 107.2)) {
      result = 3
    } else if ((107.2 < size) && (size <= 111.7)) {
      result = 2
    } else if ((111.7 < size) && (size <= 116.1)) {
      result = 2
    } else if ((116.1 < size) && (size < 120.6)) {
      result = 4
    }
    return result
  }
  if (month === 56) {
    if (size <= 94.3) {
      result = 0
    } else if ((94.3 < size) && (size <= 98.8)) {
      result = 1
    } else if ((98.8 < size) && (size <= 103.3)) {
      result = 2
    } else if ((103.3 < size) && (size <= 107.8)) {
      result = 3
    } else if ((107.8 < size) && (size <= 112.3)) {
      result = 2
    } else if ((112.3 < size) && (size <= 116.7)) {
      result = 2
    } else if ((116.7 < size) && (size < 121.2)) {
      result = 4
    }
    return result
  }
  if (month === 57) {
    if (size <= 94.7) {
      result = 0
    } else if ((94.7 < size) && (size <= 99.3)) {
      result = 1
    } else if ((99.3 < size) && (size <= 103.8)) {
      result = 2
    } else if ((103.8 < size) && (size <= 108.3)) {
      result = 3
    } else if ((108.3 < size) && (size <= 112.8)) {
      result = 2
    } else if ((112.8 < size) && (size <= 117.4)) {
      result = 2
    } else if ((117.4 < size) && (size < 121.9)) {
      result = 4
    }
    return result
  }
  if (month === 58) {
    if (size <= 95.2) {
      result = 0
    } else if ((95.2 < size) && (size <= 99.7)) {
      result = 1
    } else if ((99.7 < size) && (size <= 104.3)) {
      result = 2
    } else if ((104.3 < size) && (size <= 108.9)) {
      result = 3
    } else if ((108.9 < size) && (size <= 113.4)) {
      result = 2
    } else if ((113.4 < size) && (size <= 118)) {
      result = 2
    } else if ((118 < size) && (size < 122.6)) {
      result = 4
    }
    return result
  }
  if (month === 59) {
    if (size <= 95.6) {
      result = 0
    } else if ((95.6 < size) && (size <= 100.2)) {
      result = 1
    } else if ((100.2 < size) && (size <= 104.8)) {
      result = 2
    } else if ((104.8 < size) && (size <= 109.4)) {
      result = 3
    } else if ((109.4 < size) && (size <= 114)) {
      result = 2
    } else if ((114 < size) && (size <= 118.6)) {
      result = 2
    } else if ((118.6 < size) && (size < 123.2)) {
      result = 4
    }
    return result
  }
  if (month === 60) {
    if (size <= 96.1) {
      result = 0
    } else if ((96.1 < size) && (size <= 100.7)) {
      result = 1
    } else if ((100.7 < size) && (size <= 105.3)) {
      result = 2
    } else if ((105.3 < size) && (size <= 110)) {
      result = 3
    } else if ((110 < size) && (size <= 114.6)) {
      result = 2
    } else if ((114.6 < size) && (size <= 119.2)) {
      result = 2
    } else if ((119.2 < size) && (size < 123.9)) {
      result = 4
    }
    return result
  }
  if (month === 61) {
    if (size <= 96.5) {
      result = 0
    } else if ((96.5 < size) && (size <= 101.1)) {
      result = 1
    } else if ((101.1 < size) && (size <= 105.7)) {
      result = 2
    } else if ((105.7 < size) && (size <= 110.3)) {
      result = 3
    } else if ((110.3 < size) && (size <= 114.9)) {
      result = 2
    } else if ((114.9 < size) && (size <= 119.4)) {
      result = 2
    } else if ((119.4 < size) && (size < 124)) {
      result = 4
    }
    return result
  }
  if (month === 62) {
    if (size <= 96.9) {
      result = 0
    } else if ((96.9 < size) && (size <= 101.6)) {
      result = 1
    } else if ((101.6 < size) && (size <= 106.2)) {
      result = 2
    } else if ((106.2 < size) && (size <= 110.8)) {
      result = 3
    } else if ((110.8 < size) && (size <= 115.4)) {
      result = 2
    } else if ((115.4 < size) && (size <= 120)) {
      result = 2
    } else if ((120 < size) && (size < 124.7)) {
      result = 4
    }
    return result
  }
  if (month === 63) {
    if (size <= 97.4) {
      result = 0
    } else if ((97.4 < size) && (size <= 102)) {
      result = 1
    } else if ((102 < size) && (size <= 106.7)) {
      result = 2
    } else if ((106.7 < size) && (size <= 111.3)) {
      result = 3
    } else if ((111.3 < size) && (size <= 116)) {
      result = 2
    } else if ((116 < size) && (size <= 120.6)) {
      result = 2
    } else if ((120.6 < size) && (size < 125.3)) {
      result = 4
    }
    return result
  }
  if (month === 64) {
    if (size <= 97.8) {
      result = 0
    } else if ((97.8 < size) && (size <= 102.5)) {
      result = 1
    } else if ((102.5 < size) && (size <= 107.2)) {
      result = 2
    } else if ((107.2 < size) && (size <= 111.9)) {
      result = 3
    } else if ((111.9 < size) && (size <= 116.5)) {
      result = 2
    } else if ((116.5 < size) && (size <= 121.2)) {
      result = 2
    } else if ((121.2 < size) && (size < 125.9)) {
      result = 4
    }
    return result
  }
  if (month === 65) {
    if (size <= 98.2) {
      result = 0
    } else if ((98.2 < size) && (size <= 103)) {
      result = 1
    } else if ((103 < size) && (size <= 107.7)) {
      result = 2
    } else if ((107.7 < size) && (size <= 112.4)) {
      result = 3
    } else if ((112.4 < size) && (size <= 117.1)) {
      result = 2
    } else if ((117.1 < size) && (size <= 121.8)) {
      result = 2
    } else if ((121.8 < size) && (size < 126.5)) {
      result = 4
    }
    return result
  }
  if (month === 66) {
    if (size <= 98.7) {
      result = 0
    } else if ((98.7 < size) && (size <= 103.4)) {
      result = 1
    } else if ((103.4 < size) && (size <= 108.2)) {
      result = 2
    } else if ((108.2 < size) && (size <= 112.9)) {
      result = 3
    } else if ((112.9 < size) && (size <= 117.7)) {
      result = 2
    } else if ((117.7 < size) && (size <= 122.4)) {
      result = 2
    } else if ((122.4 < size) && (size < 127.1)) {
      result = 4
    }
    return result
  }
  if (month === 67) {
    if (size <= 99.1) {
      result = 0
    } else if ((99.1 < size) && (size <= 103.9)) {
      result = 1
    } else if ((103.9 < size) && (size <= 108.7)) {
      result = 2
    } else if ((108.7 < size) && (size <= 113.4)) {
      result = 3
    } else if ((113.4 < size) && (size <= 118.2)) {
      result = 2
    } else if ((118.2 < size) && (size <= 123)) {
      result = 2
    } else if ((123 < size) && (size < 127.8)) {
      result = 4
    }
    return result
  }
  if (month === 68) {
    if (size <= 99.5) {
      result = 0
    } else if ((99.5 < size) && (size <= 104.3)) {
      result = 1
    } else if ((104.3 < size) && (size <= 109.1)) {
      result = 2
    } else if ((109.1 < size) && (size <= 113.9)) {
      result = 3
    } else if ((113.9 < size) && (size <= 118.7)) {
      result = 2
    } else if ((118.7 < size) && (size <= 123.6)) {
      result = 2
    } else if ((123.6 < size) && (size < 128.4)) {
      result = 4
    }
    return result
  }
  if (month === 69) {
    if (size <= 99.9) {
      result = 0
    } else if ((99.9 < size) && (size <= 104.8)) {
      result = 1
    } else if ((104.8 < size) && (size <= 109.6)) {
      result = 2
    } else if ((109.6 < size) && (size <= 114.5)) {
      result = 3
    } else if ((114.5 < size) && (size <= 119.3)) {
      result = 2
    } else if ((119.3 < size) && (size <= 124.1)) {
      result = 2
    } else if ((124.1 < size) && (size < 129)) {
      result = 4
    }
    return result
  }
  if (month === 70) {
    if (size <= 100.4) {
      result = 0
    } else if ((100.4 < size) && (size <= 105.2)) {
      result = 1
    } else if ((105.2 < size) && (size <= 110.1)) {
      result = 2
    } else if ((110.1 < size) && (size <= 115)) {
      result = 3
    } else if ((115 < size) && (size <= 119.8)) {
      result = 2
    } else if ((119.8 < size) && (size <= 124.7)) {
      result = 2
    } else if ((124.7 < size) && (size < 129.6)) {
      result = 4
    }
    return result
  }
  if (month === 71) {
    if (size <= 100.8) {
      result = 0
    } else if ((100.8 < size) && (size <= 105.7)) {
      result = 1
    } else if ((105.7 < size) && (size <= 110.6)) {
      result = 2
    } else if ((110.6 < size) && (size <= 115.5)) {
      result = 3
    } else if ((115.5 < size) && (size <= 120.4)) {
      result = 2
    } else if ((120.4 < size) && (size <= 125.2)) {
      result = 2
    } else if ((125.2 < size) && (size < 130.1)) {
      result = 4
    }
    return result
  }
  if (month === 72) {
    if (size <= 101.2) {
      result = 0
    } else if ((101.2 < size) && (size <= 106.1)) {
      result = 1
    } else if ((106.1 < size) && (size <= 111)) {
      result = 2
    } else if ((111 < size) && (size <= 116)) {
      result = 3
    } else if ((116 < size) && (size <= 120.9)) {
      result = 2
    } else if ((120.9 < size) && (size <= 125.8)) {
      result = 2
    } else if ((125.8 < size) && (size < 130.7)) {
      result = 4
    }
    return result
  }
}
