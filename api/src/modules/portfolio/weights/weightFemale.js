export const weightFemale = async (month, size, result) => {
  if (month === 0) {
    if (size <= 43.6) {
      result = 0
    } else if ((43.6 < size) && (size <= 45.4)) {
      result = 1
    } else if ((45.4 < size) && (size <= 47.3)) {
      result = 2
    } else if ((47.3 < size) && (size <= 49.1)) {
      result = 3
    } else if ((49.1 < size) && (size <= 51)) {
      result = 2
    } else if ((51 < size) && (size <= 52.9)) {
      result = 2
    } else if ((52.9 < size) && (size < 54.7)) {
      result = 4
    }
    return result
  }
  if (month === 1) {
    if (size <= 47.8) {
      result = 0
    } else if ((47.8 < size) && (size <= 49.8)) {
      result = 1
    } else if ((49.8 < size) && (size <= 51.7)) {
      result = 2
    } else if ((51.7 < size) && (size <= 53.7)) {
      result = 3
    } else if ((53.7 < size) && (size <= 55.6)) {
      result = 2
    } else if ((55.6 < size) && (size <= 57.6)) {
      result = 2
    } else if ((57.6 < size) && (size < 59.5)) {
      result = 4
    }
    return result
  }
  if (month === 2) {
    if (size <= 51) {
      result = 0
    } else if ((51 < size) && (size <= 53)) {
      result = 1
    } else if ((53 < size) && (size <= 55)) {
      result = 2
    } else if ((55 < size) && (size <= 57.1)) {
      result = 3
    } else if ((57.1 < size) && (size <= 59.1)) {
      result = 2
    } else if ((59.1 < size) && (size <= 61.1)) {
      result = 2
    } else if ((61.1 < size) && (size < 63.2)) {
      result = 4
    }
    return result
  }
  if (month === 3) {
    if (size <= 53.5) {
      result = 0
    } else if ((53.5 < size) && (size <= 55.6)) {
      result = 1
    } else if ((55.6 < size) && (size <= 57.7)) {
      result = 2
    } else if ((57.7 < size) && (size <= 59.8)) {
      result = 3
    } else if ((59.8 < size) && (size <= 61.9)) {
      result = 2
    } else if ((61.9 < size) && (size <= 64)) {
      result = 2
    } else if ((64 < size) && (size < 66.1)) {
      result = 4
    }
    return result
  }
  if (month === 4) {
    if (size <= 55.6) {
      result = 0
    } else if ((55.6 < size) && (size <= 57.8)) {
      result = 1
    } else if ((57.8 < size) && (size <= 59.9)) {
      result = 2
    } else if ((59.9 < size) && (size <= 62.1)) {
      result = 3
    } else if ((62.1 < size) && (size <= 64.3)) {
      result = 2
    } else if ((64.3 < size) && (size <= 66.4)) {
      result = 2
    } else if ((66.4 < size) && (size < 68.6)) {
      result = 4
    }
    return result
  }
  if (month === 5) {
    if (size <= 57.4) {
      result = 0
    } else if ((57.4 < size) && (size <= 59.6)) {
      result = 1
    } else if ((59.6 < size) && (size <= 61.8)) {
      result = 2
    } else if ((61.8 < size) && (size <= 64)) {
      result = 3
    } else if ((64 < size) && (size <= 66.2)) {
      result = 2
    } else if ((66.2 < size) && (size <= 68.5)) {
      result = 2
    } else if ((68.5 < size) && (size < 70.7)) {
      result = 4
    }
    return result
  }
  if (month === 6) {
    if (size <= 58.9) {
      result = 0
    } else if ((58.9 < size) && (size <= 61.2)) {
      result = 1
    } else if ((61.2 < size) && (size <= 63.5)) {
      result = 2
    } else if ((63.5 < size) && (size <= 65.7)) {
      result = 3
    } else if ((65.7 < size) && (size <= 68)) {
      result = 2
    } else if ((68 < size) && (size <= 70.3)) {
      result = 2
    } else if ((70.3 < size) && (size < 72.5)) {
      result = 4
    }
    return result
  }
  if (month === 7) {
    if (size <= 60.3) {
      result = 0
    } else if ((60.3 < size) && (size <= 62.7)) {
      result = 1
    } else if ((62.7 < size) && (size <= 65)) {
      result = 2
    } else if ((65 < size) && (size <= 67.3)) {
      result = 3
    } else if ((67.3 < size) && (size <= 69.6)) {
      result = 2
    } else if ((69.6 < size) && (size <= 71.9)) {
      result = 2
    } else if ((71.9 < size) && (size < 74.2)) {
      result = 4
    }
    return result
  }
  if (month === 8) {
    if (size <= 61.7) {
      result = 0
    } else if ((61.7 < size) && (size <= 64)) {
      result = 1
    } else if ((64 < size) && (size <= 66.4)) {
      result = 2
    } else if ((66.4 < size) && (size <= 68.7)) {
      result = 3
    } else if ((68.7 < size) && (size <= 71.1)) {
      result = 2
    } else if ((71.1 < size) && (size <= 73.5)) {
      result = 2
    } else if ((73.5 < size) && (size < 75.8)) {
      result = 4
    }
    return result
  }
  if (month === 9) {
    if (size <= 62.9) {
      result = 0
    } else if ((62.9 < size) && (size <= 65.3)) {
      result = 1
    } else if ((65.3 < size) && (size <= 67.7)) {
      result = 2
    } else if ((67.7 < size) && (size <= 70.1)) {
      result = 3
    } else if ((70.1 < size) && (size <= 72.6)) {
      result = 2
    } else if ((72.6 < size) && (size <= 75)) {
      result = 2
    } else if ((75 < size) && (size < 77.4)) {
      result = 4
    }
    return result
  }
  if (month === 10) {
    if (size <= 64.1) {
      result = 0
    } else if ((64.1 < size) && (size <= 66.5)) {
      result = 1
    } else if ((66.5 < size) && (size <= 69)) {
      result = 2
    } else if ((69 < size) && (size <= 71.5)) {
      result = 3
    } else if ((71.5 < size) && (size <= 73.9)) {
      result = 2
    } else if ((73.9 < size) && (size <= 76.4)) {
      result = 2
    } else if ((76.4 < size) && (size < 78.9)) {
      result = 4
    }
    return result
  }
  if (month === 11) {
    if (size <= 65.2) {
      result = 0
    } else if ((65.2 < size) && (size <= 67.7)) {
      result = 1
    } else if ((67.7 < size) && (size <= 70.3)) {
      result = 2
    } else if ((70.3 < size) && (size <= 72.8)) {
      result = 3
    } else if ((72.8 < size) && (size <= 75.3)) {
      result = 2
    } else if ((75.3 < size) && (size <= 77.8)) {
      result = 2
    } else if ((77.8 < size) && (size < 80.3)) {
      result = 4
    }
    return result
  }
  if (month === 12) {
    if (size <= 66.3) {
      result = 0
    } else if ((66.3 < size) && (size <= 68.9)) {
      result = 1
    } else if ((68.9 < size) && (size <= 71.4)) {
      result = 2
    } else if ((71.4 < size) && (size <= 74)) {
      result = 3
    } else if ((74 < size) && (size <= 76.6)) {
      result = 2
    } else if ((76.6 < size) && (size <= 79.2)) {
      result = 2
    } else if ((79.2 < size) && (size < 81.7)) {
      result = 4
    }
    return result
  }
  if (month === 13) {
    if (size <= 67.3) {
      result = 0
    } else if ((67.3 < size) && (size <= 70)) {
      result = 1
    } else if ((70 < size) && (size <= 72.6)) {
      result = 2
    } else if ((72.6 < size) && (size <= 75.2)) {
      result = 3
    } else if ((75.2 < size) && (size <= 77.8)) {
      result = 2
    } else if ((77.8 < size) && (size <= 80.5)) {
      result = 2
    } else if ((80.5 < size) && (size < 83.1)) {
      result = 4
    }
    return result
  }
  if (month === 14) {
    if (size <= 68.3) {
      result = 0
    } else if ((68.3 < size) && (size <= 71)) {
      result = 1
    } else if ((71 < size) && (size <= 73.7)) {
      result = 2
    } else if ((73.7 < size) && (size <= 76.4)) {
      result = 3
    } else if ((76.4 < size) && (size <= 79.1)) {
      result = 2
    } else if ((79.1 < size) && (size <= 81.7)) {
      result = 2
    } else if ((81.7 < size) && (size < 84.4)) {
      result = 4
    }
    return result
  }
  if (month === 15) {
    if (size <= 69.3) {
      result = 0
    } else if ((69.3 < size) && (size <= 72)) {
      result = 1
    } else if ((72 < size) && (size <= 74.8)) {
      result = 2
    } else if ((74.8 < size) && (size <= 77.5)) {
      result = 3
    } else if ((77.5 < size) && (size <= 80.2)) {
      result = 2
    } else if ((80.2 < size) && (size <= 83)) {
      result = 2
    } else if ((83 < size) && (size < 85.7)) {
      result = 4
    }
    return result
  }
  if (month === 16) {
    if (size <= 70.2) {
      result = 0
    } else if ((70.2 < size) && (size <= 73)) {
      result = 1
    } else if ((73 < size) && (size <= 75.8)) {
      result = 2
    } else if ((75.8 < size) && (size <= 78.6)) {
      result = 3
    } else if ((78.6 < size) && (size <= 81.4)) {
      result = 2
    } else if ((81.4 < size) && (size <= 84.2)) {
      result = 2
    } else if ((84.2 < size) && (size < 87)) {
      result = 4
    }
    return result
  }
  if (month === 17) {
    if (size <= 71.1) {
      result = 0
    } else if ((71.1 < size) && (size <= 74)) {
      result = 1
    } else if ((74 < size) && (size <= 76.8)) {
      result = 2
    } else if ((76.8 < size) && (size <= 79.7)) {
      result = 3
    } else if ((79.7 < size) && (size <= 82.5)) {
      result = 2
    } else if ((82.5 < size) && (size <= 85.4)) {
      result = 2
    } else if ((85.4 < size) && (size < 88.2)) {
      result = 4
    }
    return result
  }
  if (month === 18) {
    if (size <= 72) {
      result = 0
    } else if ((72 < size) && (size <= 74.9)) {
      result = 1
    } else if ((74.9 < size) && (size <= 77.8)) {
      result = 2
    } else if ((77.8 < size) && (size <= 80.7)) {
      result = 3
    } else if ((80.7 < size) && (size <= 83.6)) {
      result = 2
    } else if ((83.6 < size) && (size <= 86.5)) {
      result = 2
    } else if ((86.5 < size) && (size < 89.4)) {
      result = 4
    }
    return result
  }
  if (month === 19) {
    if (size <= 72.8) {
      result = 0
    } else if ((72.8 < size) && (size <= 75.8)) {
      result = 1
    } else if ((75.8 < size) && (size <= 78.8)) {
      result = 2
    } else if ((78.8 < size) && (size <= 81.7)) {
      result = 3
    } else if ((81.7 < size) && (size <= 84.7)) {
      result = 2
    } else if ((84.7 < size) && (size <= 87.6)) {
      result = 2
    } else if ((87.6 < size) && (size < 90.6)) {
      result = 4
    }
    return result
  }
  if (month === 20) {
    if (size <= 73.7) {
      result = 0
    } else if ((73.7 < size) && (size <= 76.7)) {
      result = 1
    } else if ((76.7 < size) && (size <= 79.7)) {
      result = 2
    } else if ((79.7 < size) && (size <= 82.7)) {
      result = 3
    } else if ((82.7 < size) && (size <= 85.7)) {
      result = 2
    } else if ((85.7 < size) && (size <= 88.7)) {
      result = 2
    } else if ((88.7 < size) && (size < 91.7)) {
      result = 4
    }
    return result
  }
  if (month === 21) {
    if (size <= 74.5) {
      result = 0
    } else if ((74.5 < size) && (size <= 77.5)) {
      result = 1
    } else if ((77.5 < size) && (size <= 80.6)) {
      result = 2
    } else if ((80.6 < size) && (size <= 83.7)) {
      result = 3
    } else if ((83.7 < size) && (size <= 86.7)) {
      result = 2
    } else if ((86.7 < size) && (size <= 89.8)) {
      result = 2
    } else if ((89.8 < size) && (size < 92.9)) {
      result = 4
    }
    return result
  }
  if (month === 22) {
    if (size <= 75.2) {
      result = 0
    } else if ((75.2 < size) && (size <= 78.4)) {
      result = 1
    } else if ((78.4 < size) && (size <= 81.5)) {
      result = 2
    } else if ((81.5 < size) && (size <= 84.6)) {
      result = 3
    } else if ((84.6 < size) && (size <= 87.7)) {
      result = 2
    } else if ((87.7 < size) && (size <= 90.8)) {
      result = 2
    } else if ((90.8 < size) && (size < 94)) {
      result = 4
    }
    return result
  }
  if (month === 23) {
    if (size <= 76) {
      result = 0
    } else if ((76 < size) && (size <= 79.2)) {
      result = 1
    } else if ((79.2 < size) && (size <= 82.3)) {
      result = 2
    } else if ((82.3 < size) && (size <= 85.5)) {
      result = 3
    } else if ((85.5 < size) && (size <= 88.7)) {
      result = 2
    } else if ((88.7 < size) && (size <= 91.9)) {
      result = 2
    } else if ((91.9 < size) && (size < 95)) {
      result = 4
    }
    return result
  }
  if (month === 24) {
    if (size <= 76.7) {
      result = 0
    } else if ((76.7 < size) && (size <= 80)) {
      result = 1
    } else if ((80 < size) && (size <= 83.2)) {
      result = 2
    } else if ((83.2 < size) && (size <= 86.4)) {
      result = 3
    } else if ((86.4 < size) && (size <= 89.6)) {
      result = 2
    } else if ((89.6 < size) && (size <= 92.9)) {
      result = 2
    } else if ((92.9 < size) && (size < 96.1)) {
      result = 4
    }
    return result
  }
  if (month === 25) {
    if (size <= 76.8) {
      result = 0
    } else if ((76.8 < size) && (size <= 80)) {
      result = 1
    } else if ((80 < size) && (size <= 83.3)) {
      result = 2
    } else if ((83.3 < size) && (size <= 86.6)) {
      result = 3
    } else if ((86.6 < size) && (size <= 89.9)) {
      result = 2
    } else if ((89.9 < size) && (size <= 93.1)) {
      result = 2
    } else if ((93.1 < size) && (size < 96.4)) {
      result = 4
    }
    return result
  }
  if (month === 26) {
    if (size <= 77.5) {
      result = 0
    } else if ((77.5 < size) && (size <= 80.8)) {
      result = 1
    } else if ((80.8 < size) && (size <= 84.1)) {
      result = 2
    } else if ((84.1 < size) && (size <= 87.4)) {
      result = 3
    } else if ((87.4 < size) && (size <= 90.8)) {
      result = 2
    } else if ((90.8 < size) && (size <= 94.1)) {
      result = 2
    } else if ((94.1 < size) && (size < 97.4)) {
      result = 4
    }
    return result
  }
  if (month === 27) {
    if (size <= 78.1) {
      result = 0
    } else if ((78.1 < size) && (size <= 81.5)) {
      result = 1
    } else if ((81.5 < size) && (size <= 84.9)) {
      result = 2
    } else if ((84.9 < size) && (size <= 88.3)) {
      result = 3
    } else if ((88.3 < size) && (size <= 91.7)) {
      result = 2
    } else if ((91.7 < size) && (size <= 95)) {
      result = 2
    } else if ((95 < size) && (size < 98.4)) {
      result = 4
    }
    return result
  }
  if (month === 28) {
    if (size <= 78.8) {
      result = 0
    } else if ((78.8 < size) && (size <= 82.2)) {
      result = 1
    } else if ((82.2 < size) && (size <= 85.7)) {
      result = 2
    } else if ((85.7 < size) && (size <= 89.1)) {
      result = 3
    } else if ((89.1 < size) && (size <= 92.5)) {
      result = 2
    } else if ((92.5 < size) && (size <= 96)) {
      result = 2
    } else if ((96 < size) && (size < 99.4)) {
      result = 4
    }
    return result
  }
  if (month === 29) {
    if (size <= 79.5) {
      result = 0
    } else if ((79.5 < size) && (size <= 82.9)) {
      result = 1
    } else if ((82.9 < size) && (size <= 86.4)) {
      result = 2
    } else if ((86.4 < size) && (size <= 89.9)) {
      result = 3
    } else if ((89.9 < size) && (size <= 93.4)) {
      result = 2
    } else if ((93.4 < size) && (size <= 96.9)) {
      result = 2
    } else if ((96.9 < size) && (size < 100.3)) {
      result = 4
    }
    return result
  }
  if (month === 30) {
    if (size <= 80.1) {
      result = 0
    } else if ((80.1 < size) && (size <= 83.6)) {
      result = 1
    } else if ((83.6 < size) && (size <= 87.1)) {
      result = 2
    } else if ((87.1 < size) && (size <= 90.7)) {
      result = 3
    } else if ((90.7 < size) && (size <= 94.2)) {
      result = 2
    } else if ((94.2 < size) && (size <= 97.7)) {
      result = 2
    } else if ((97.7 < size) && (size < 101.3)) {
      result = 4
    }
    return result
  }
  if (month === 31) {
    if (size <= 80.7) {
      result = 0
    } else if ((80.7 < size) && (size <= 84.3)) {
      result = 1
    } else if ((84.3 < size) && (size <= 87.9)) {
      result = 2
    } else if ((87.9 < size) && (size <= 91.4)) {
      result = 3
    } else if ((91.4 < size) && (size <= 95)) {
      result = 2
    } else if ((95 < size) && (size <= 98.6)) {
      result = 2
    } else if ((98.6 < size) && (size < 102.2)) {
      result = 4
    }
    return result
  }
  if (month === 32) {
    if (size <= 81.3) {
      result = 0
    } else if ((81.3 < size) && (size <= 84.9)) {
      result = 1
    } else if ((84.9 < size) && (size <= 88.6)) {
      result = 2
    } else if ((88.6 < size) && (size <= 92.2)) {
      result = 3
    } else if ((92.2 < size) && (size <= 95.8)) {
      result = 2
    } else if ((95.8 < size) && (size <= 99.4)) {
      result = 2
    } else if ((99.4 < size) && (size < 103.1)) {
      result = 4
    }
    return result
  }
  if (month === 33) {
    if (size <= 81.9) {
      result = 0
    } else if ((81.9 < size) && (size <= 85.6)) {
      result = 1
    } else if ((85.6 < size) && (size <= 89.3)) {
      result = 2
    } else if ((89.3 < size) && (size <= 92.9)) {
      result = 3
    } else if ((92.9 < size) && (size <= 96.6)) {
      result = 2
    } else if ((96.6 < size) && (size <= 100.3)) {
      result = 2
    } else if ((100.3 < size) && (size < 103.9)) {
      result = 4
    }
    return result
  }
  if (month === 34) {
    if (size <= 82.5) {
      result = 0
    } else if ((82.5 < size) && (size <= 86.2)) {
      result = 1
    } else if ((86.2 < size) && (size <= 89.9)) {
      result = 2
    } else if ((89.9 < size) && (size <= 93.6)) {
      result = 3
    } else if ((93.6 < size) && (size <= 97.4)) {
      result = 2
    } else if ((97.4 < size) && (size <= 101.1)) {
      result = 2
    } else if ((101.1 < size) && (size < 104.8)) {
      result = 4
    }
    return result
  }
  if (month === 35) {
    if (size <= 83.1) {
      result = 0
    } else if ((83.1 < size) && (size <= 86.8)) {
      result = 1
    } else if ((86.8 < size) && (size <= 90.6)) {
      result = 2
    } else if ((90.6 < size) && (size <= 94.4)) {
      result = 3
    } else if ((94.4 < size) && (size <= 98.1)) {
      result = 2
    } else if ((98.1 < size) && (size <= 101.9)) {
      result = 2
    } else if ((101.9 < size) && (size < 105.6)) {
      result = 4
    }
    return result
  }
  if (month === 36) {
    if (size <= 83.6) {
      result = 0
    } else if ((83.6 < size) && (size <= 87.4)) {
      result = 1
    } else if ((87.4 < size) && (size <= 91.2)) {
      result = 2
    } else if ((91.2 < size) && (size <= 95.1)) {
      result = 3
    } else if ((95.1 < size) && (size <= 98.9)) {
      result = 2
    } else if ((98.9 < size) && (size <= 102.7)) {
      result = 2
    } else if ((102.7 < size) && (size < 106.5)) {
      result = 4
    }
    return result
  }
  if (month === 37) {
    if (size <= 84.2) {
      result = 0
    } else if ((84.2 < size) && (size <= 88)) {
      result = 1
    } else if ((88 < size) && (size <= 91.9)) {
      result = 2
    } else if ((91.9 < size) && (size <= 95.7)) {
      result = 3
    } else if ((95.7 < size) && (size <= 99.6)) {
      result = 2
    } else if ((99.6 < size) && (size <= 103.4)) {
      result = 2
    } else if ((103.4 < size) && (size < 107.3)) {
      result = 4
    }
    return result
  }
  if (month === 38) {
    if (size <= 84.7) {
      result = 0
    } else if ((84.7 < size) && (size <= 88.6)) {
      result = 1
    } else if ((88.6 < size) && (size <= 92.5)) {
      result = 2
    } else if ((92.5 < size) && (size <= 96.4)) {
      result = 3
    } else if ((96.4 < size) && (size <= 100.3)) {
      result = 2
    } else if ((100.3 < size) && (size <= 104.2)) {
      result = 2
    } else if ((104.2 < size) && (size < 108.1)) {
      result = 4
    }
    return result
  }
  if (month === 39) {
    if (size <= 85.3) {
      result = 0
    } else if ((85.3 < size) && (size <= 89.2)) {
      result = 1
    } else if ((89.2 < size) && (size <= 93.1)) {
      result = 2
    } else if ((93.1 < size) && (size <= 97.1)) {
      result = 3
    } else if ((97.1 < size) && (size <= 101)) {
      result = 2
    } else if ((101 < size) && (size <= 105)) {
      result = 2
    } else if ((105 < size) && (size < 108.9)) {
      result = 4
    }
    return result
  }
  if (month === 40) {
    if (size <= 85.8) {
      result = 0
    } else if ((85.8 < size) && (size <= 89.8)) {
      result = 1
    } else if ((89.8 < size) && (size <= 93.8)) {
      result = 2
    } else if ((93.8 < size) && (size <= 97.7)) {
      result = 3
    } else if ((97.7 < size) && (size <= 101.7)) {
      result = 2
    } else if ((101.7 < size) && (size <= 105.7)) {
      result = 2
    } else if ((105.7 < size) && (size < 109.7)) {
      result = 4
    }
    return result
  }
  if (month === 41) {
    if (size <= 86.3) {
      result = 0
    } else if ((86.3 < size) && (size <= 90.4)) {
      result = 1
    } else if ((90.4 < size) && (size <= 94.4)) {
      result = 2
    } else if ((94.4 < size) && (size <= 98.4)) {
      result = 3
    } else if ((98.4 < size) && (size <= 102.4)) {
      result = 2
    } else if ((102.4 < size) && (size <= 106.4)) {
      result = 2
    } else if ((106.4 < size) && (size < 110.5)) {
      result = 4
    }
    return result
  }
  if (month === 42) {
    if (size <= 86.8) {
      result = 0
    } else if ((86.8 < size) && (size <= 90.9)) {
      result = 1
    } else if ((90.9 < size) && (size <= 95)) {
      result = 2
    } else if ((95 < size) && (size <= 99)) {
      result = 3
    } else if ((99 < size) && (size <= 103.1)) {
      result = 2
    } else if ((103.1 < size) && (size <= 107.2)) {
      result = 2
    } else if ((107.2 < size) && (size < 111.2)) {
      result = 4
    }
    return result
  }
  if (month === 43) {
    if (size <= 87.4) {
      result = 0
    } else if ((87.4 < size) && (size <= 91.5)) {
      result = 1
    } else if ((91.5 < size) && (size <= 95.6)) {
      result = 2
    } else if ((95.6 < size) && (size <= 99.7)) {
      result = 3
    } else if ((99.7 < size) && (size <= 103.8)) {
      result = 2
    } else if ((103.8 < size) && (size <= 107.9)) {
      result = 2
    } else if ((107.9 < size) && (size < 112)) {
      result = 4
    }
    return result
  }
  if (month === 44) {
    if (size <= 87.9) {
      result = 0
    } else if ((87.9 < size) && (size <= 92)) {
      result = 1
    } else if ((92 < size) && (size <= 96.2)) {
      result = 2
    } else if ((96.2 < size) && (size <= 100.3)) {
      result = 3
    } else if ((100.3 < size) && (size <= 104.5)) {
      result = 2
    } else if ((104.5 < size) && (size <= 108.6)) {
      result = 2
    } else if ((108.6 < size) && (size < 112.7)) {
      result = 4
    }
    return result
  }
  if (month === 45) {
    if (size <= 88.4) {
      result = 0
    } else if ((88.4 < size) && (size <= 92.5)) {
      result = 1
    } else if ((92.5 < size) && (size <= 96.7)) {
      result = 2
    } else if ((96.7 < size) && (size <= 100.9)) {
      result = 3
    } else if ((100.9 < size) && (size <= 105.1)) {
      result = 2
    } else if ((105.1 < size) && (size <= 109.3)) {
      result = 2
    } else if ((109.3 < size) && (size < 113.5)) {
      result = 4
    }
    return result
  }
  if (month === 46) {
    if (size <= 88.9) {
      result = 0
    } else if ((88.9 < size) && (size <= 93.1)) {
      result = 1
    } else if ((93.1 < size) && (size <= 97.3)) {
      result = 2
    } else if ((97.3 < size) && (size <= 101.5)) {
      result = 3
    } else if ((101.5 < size) && (size <= 105.8)) {
      result = 2
    } else if ((105.8 < size) && (size <= 110)) {
      result = 2
    } else if ((110 < size) && (size < 114.2)) {
      result = 4
    }
    return result
  }
  if (month === 47) {
    if (size <= 89.3) {
      result = 0
    } else if ((89.3 < size) && (size <= 93.6)) {
      result = 1
    } else if ((93.6 < size) && (size <= 97.9)) {
      result = 2
    } else if ((97.9 < size) && (size <= 102.1)) {
      result = 3
    } else if ((102.1 < size) && (size <= 106.4)) {
      result = 2
    } else if ((106.4 < size) && (size <= 110.7)) {
      result = 2
    } else if ((110.7 < size) && (size < 114.9)) {
      result = 4
    }
    return result
  }
  if (month === 48) {
    if (size <= 89.8) {
      result = 0
    } else if ((89.8 < size) && (size <= 94.1)) {
      result = 1
    } else if ((94.1 < size) && (size <= 98.4)) {
      result = 2
    } else if ((98.4 < size) && (size <= 102.7)) {
      result = 3
    } else if ((102.7 < size) && (size <= 107)) {
      result = 2
    } else if ((107 < size) && (size <= 111.3)) {
      result = 2
    } else if ((111.3 < size) && (size < 115.7)) {
      result = 4
    }
    return result
  }
  if (month === 49) {
    if (size <= 90.3) {
      result = 0
    } else if ((90.3 < size) && (size <= 94.6)) {
      result = 1
    } else if ((94.6 < size) && (size <= 99)) {
      result = 2
    } else if ((99 < size) && (size <= 103.3)) {
      result = 3
    } else if ((103.3 < size) && (size <= 107.7)) {
      result = 2
    } else if ((107.7 < size) && (size <= 112)) {
      result = 2
    } else if ((112 < size) && (size < 116.4)) {
      result = 4
    }
    return result
  }
  if (month === 50) {
    if (size <= 90.7) {
      result = 0
    } else if ((90.7 < size) && (size <= 95.1)) {
      result = 1
    } else if ((95.1 < size) && (size <= 99.5)) {
      result = 2
    } else if ((99.5 < size) && (size <= 103.9)) {
      result = 3
    } else if ((103.9 < size) && (size <= 108.3)) {
      result = 2
    } else if ((108.3 < size) && (size <= 112.7)) {
      result = 2
    } else if ((112.7 < size) && (size < 117.1)) {
      result = 4
    }
    return result
  }
  if (month === 51) {
    if (size <= 91.2) {
      result = 0
    } else if ((91.2 < size) && (size <= 95.6)) {
      result = 1
    } else if ((95.6 < size) && (size <= 100.1)) {
      result = 2
    } else if ((100.1 < size) && (size <= 104.5)) {
      result = 3
    } else if ((104.5 < size) && (size <= 108.9)) {
      result = 2
    } else if ((108.9 < size) && (size <= 113.3)) {
      result = 2
    } else if ((113.3 < size) && (size < 117.7)) {
      result = 4
    }
    return result
  }
  if (month === 52) {
    if (size <= 91.7) {
      result = 0
    } else if ((91.7 < size) && (size <= 96.1)) {
      result = 1
    } else if ((96.1 < size) && (size <= 100.6)) {
      result = 2
    } else if ((100.6 < size) && (size <= 105)) {
      result = 3
    } else if ((105 < size) && (size <= 109.5)) {
      result = 2
    } else if ((109.5 < size) && (size <= 114)) {
      result = 2
    } else if ((114 < size) && (size < 118.4)) {
      result = 4
    }
    return result
  }
  if (month === 53) {
    if (size <= 92.1) {
      result = 0
    } else if ((92.1 < size) && (size <= 96.6)) {
      result = 1
    } else if ((96.6 < size) && (size <= 101.1)) {
      result = 2
    } else if ((101.1 < size) && (size <= 105.6)) {
      result = 3
    } else if ((105.6 < size) && (size <= 110.1)) {
      result = 2
    } else if ((110.1 < size) && (size <= 114.6)) {
      result = 2
    } else if ((114.6 < size) && (size < 119.1)) {
      result = 4
    }
    return result
  }
  if (month === 54) {
    if (size <= 92.6) {
      result = 0
    } else if ((92.6 < size) && (size <= 97.1)) {
      result = 1
    } else if ((97.1 < size) && (size <= 101.6)) {
      result = 2
    } else if ((101.6 < size) && (size <= 106.2)) {
      result = 3
    } else if ((106.2 < size) && (size <= 110.7)) {
      result = 2
    } else if ((110.7 < size) && (size <= 115.2)) {
      result = 2
    } else if ((115.2 < size) && (size < 119.8)) {
      result = 4
    }
    return result
  }
  if (month === 55) {
    if (size <= 93) {
      result = 0
    } else if ((93 < size) && (size <= 97.6)) {
      result = 1
    } else if ((97.6 < size) && (size <= 102.2)) {
      result = 2
    } else if ((102.2 < size) && (size <= 106.7)) {
      result = 3
    } else if ((106.7 < size) && (size <= 111.3)) {
      result = 2
    } else if ((111.3 < size) && (size <= 115.9)) {
      result = 2
    } else if ((115.9 < size) && (size < 120.4)) {
      result = 4
    }
    return result
  }
  if (month === 56) {
    if (size <= 93.4) {
      result = 0
    } else if ((93.4 < size) && (size <= 98.1)) {
      result = 1
    } else if ((98.1 < size) && (size <= 102.7)) {
      result = 2
    } else if ((102.7 < size) && (size <= 107.3)) {
      result = 3
    } else if ((107.3 < size) && (size <= 111.9)) {
      result = 2
    } else if ((111.9 < size) && (size <= 116.5)) {
      result = 2
    } else if ((116.5 < size) && (size < 121.1)) {
      result = 4
    }
    return result
  }
  if (month === 57) {
    if (size <= 93.9) {
      result = 0
    } else if ((93.9 < size) && (size <= 98.5)) {
      result = 1
    } else if ((98.5 < size) && (size <= 103.2)) {
      result = 2
    } else if ((103.2 < size) && (size <= 107.8)) {
      result = 3
    } else if ((107.8 < size) && (size <= 112.5)) {
      result = 2
    } else if ((112.5 < size) && (size <= 117.1)) {
      result = 2
    } else if ((117.1 < size) && (size < 121.8)) {
      result = 4
    }
    return result
  }
  if (month === 58) {
    if (size <= 94.3) {
      result = 0
    } else if ((94.3 < size) && (size <= 99)) {
      result = 1
    } else if ((99 < size) && (size <= 103.7)) {
      result = 2
    } else if ((103.7 < size) && (size <= 108.4)) {
      result = 3
    } else if ((108.4 < size) && (size <= 113)) {
      result = 2
    } else if ((113 < size) && (size <= 117.7)) {
      result = 2
    } else if ((117.7 < size) && (size < 122.4)) {
      result = 4
    }
    return result
  }
  if (month === 59) {
    if (size <= 94.7) {
      result = 0
    } else if ((94.7 < size) && (size <= 99.5)) {
      result = 1
    } else if ((99.5 < size) && (size <= 104.2)) {
      result = 2
    } else if ((104.2 < size) && (size <= 108.9)) {
      result = 3
    } else if ((108.9 < size) && (size <= 113.6)) {
      result = 2
    } else if ((113.6 < size) && (size <= 118.3)) {
      result = 2
    } else if ((118.3 < size) && (size < 123.1)) {
      result = 4
    }
    return result
  }
  if (month === 60) {
    if (size <= 95.2) {
      result = 0
    } else if ((95.2 < size) && (size <= 99.9)) {
      result = 1
    } else if ((99.9 < size) && (size <= 104.7)) {
      result = 2
    } else if ((104.7 < size) && (size <= 109.4)) {
      result = 3
    } else if ((109.4 < size) && (size <= 114.2)) {
      result = 2
    } else if ((114.2 < size) && (size <= 118.9)) {
      result = 2
    } else if ((118.9 < size) && (size < 123.7)) {
      result = 4
    }
    return result
  }
  if (month === 61) {
    if (size <= 95.3) {
      result = 0
    } else if ((95.3 < size) && (size <= 100.1)) {
      result = 1
    } else if ((100.1 < size) && (size <= 104.8)) {
      result = 2
    } else if ((104.8 < size) && (size <= 109.6)) {
      result = 3
    } else if ((109.6 < size) && (size <= 114.4)) {
      result = 2
    } else if ((114.4 < size) && (size <= 119.1)) {
      result = 2
    } else if ((119.1 < size) && (size < 123.9)) {
      result = 4
    }
    return result
  }
  if (month === 62) {
    if (size <= 95.7) {
      result = 0
    } else if ((95.7 < size) && (size <= 100.5)) {
      result = 1
    } else if ((100.5 < size) && (size <= 105.3)) {
      result = 2
    } else if ((105.3 < size) && (size <= 110.1)) {
      result = 3
    } else if ((110.1 < size) && (size <= 114.9)) {
      result = 2
    } else if ((114.9 < size) && (size <= 119.7)) {
      result = 2
    } else if ((119.7 < size) && (size < 124.5)) {
      result = 4
    }
    return result
  }
  if (month === 63) {
    if (size <= 96.1) {
      result = 0
    } else if ((96.1 < size) && (size <= 101)) {
      result = 1
    } else if ((101 < size) && (size <= 105.8)) {
      result = 2
    } else if ((105.8 < size) && (size <= 110.6)) {
      result = 3
    } else if ((110.6 < size) && (size <= 115.5)) {
      result = 2
    } else if ((115.5 < size) && (size <= 120.3)) {
      result = 2
    } else if ((120.3 < size) && (size < 125.2)) {
      result = 4
    }
    return result
  }
  if (month === 64) {
    if (size <= 96.5) {
      result = 0
    } else if ((96.5 < size) && (size <= 101.4)) {
      result = 1
    } else if ((101.4 < size) && (size <= 106.3)) {
      result = 2
    } else if ((106.3 < size) && (size <= 111.2)) {
      result = 3
    } else if ((111.2 < size) && (size <= 116)) {
      result = 2
    } else if ((116 < size) && (size <= 120.9)) {
      result = 2
    } else if ((120.9 < size) && (size < 125.8)) {
      result = 4
    }
    return result
  }
  if (month === 65) {
    if (size <= 97) {
      result = 0
    } else if ((97 < size) && (size <= 101.9)) {
      result = 1
    } else if ((101.9 < size) && (size <= 106.8)) {
      result = 2
    } else if ((106.8 < size) && (size <= 111.7)) {
      result = 3
    } else if ((111.7 < size) && (size <= 116.6)) {
      result = 2
    } else if ((116.6 < size) && (size <= 121.5)) {
      result = 2
    } else if ((121.5 < size) && (size < 126.4)) {
      result = 4
    }
    return result
  }
  if (month === 66) {
    if (size <= 97.4) {
      result = 0
    } else if ((97.4 < size) && (size <= 102.3)) {
      result = 1
    } else if ((102.3 < size) && (size <= 107.2)) {
      result = 2
    } else if ((107.2 < size) && (size <= 112.2)) {
      result = 3
    } else if ((112.2 < size) && (size <= 117.1)) {
      result = 2
    } else if ((117.1 < size) && (size <= 122)) {
      result = 2
    } else if ((122 < size) && (size < 127)) {
      result = 4
    }
    return result
  }
  if (month === 67) {
    if (size <= 97.8) {
      result = 0
    } else if ((97.8 < size) && (size <= 102.7)) {
      result = 1
    } else if ((102.7 < size) && (size <= 107.7)) {
      result = 2
    } else if ((107.7 < size) && (size <= 112.7)) {
      result = 3
    } else if ((112.7 < size) && (size <= 117.6)) {
      result = 2
    } else if ((117.6 < size) && (size <= 122.6)) {
      result = 2
    } else if ((122.6 < size) && (size < 127.6)) {
      result = 4
    }
    return result
  }
  if (month === 68) {
    if (size <= 98.2) {
      result = 0
    } else if ((98.2 < size) && (size <= 103.2)) {
      result = 1
    } else if ((103.2 < size) && (size <= 108.2)) {
      result = 2
    } else if ((108.2 < size) && (size <= 113.2)) {
      result = 3
    } else if ((113.2 < size) && (size <= 118.2)) {
      result = 2
    } else if ((118.2 < size) && (size <= 123.2)) {
      result = 2
    } else if ((123.2 < size) && (size < 128.2)) {
      result = 4
    }
    return result
  }
  if (month === 69) {
    if (size <= 98.6) {
      result = 0
    } else if ((98.6 < size) && (size <= 103.6)) {
      result = 1
    } else if ((103.6 < size) && (size <= 108.6)) {
      result = 2
    } else if ((108.6 < size) && (size <= 113.7)) {
      result = 3
    } else if ((113.7 < size) && (size <= 118.7)) {
      result = 2
    } else if ((118.7 < size) && (size <= 123.7)) {
      result = 2
    } else if ((123.7 < size) && (size < 128.8)) {
      result = 4
    }
    return result
  }
  if (month === 70) {
    if (size <= 99) {
      result = 0
    } else if ((99 < size) && (size <= 104)) {
      result = 1
    } else if ((104 < size) && (size <= 109.1)) {
      result = 2
    } else if ((109.1 < size) && (size <= 114.2)) {
      result = 3
    } else if ((114.2 < size) && (size <= 119.2)) {
      result = 2
    } else if ((119.2 < size) && (size <= 124.3)) {
      result = 2
    } else if ((124.3 < size) && (size < 129.3)) {
      result = 4
    }
    return result
  }
  if (month === 71) {
    if (size <= 99.4) {
      result = 0
    } else if ((99.4 < size) && (size <= 104.5)) {
      result = 1
    } else if ((104.5 < size) && (size <= 109.6)) {
      result = 2
    } else if ((109.6 < size) && (size <= 114.6)) {
      result = 3
    } else if ((114.6 < size) && (size <= 119.7)) {
      result = 2
    } else if ((119.7 < size) && (size <= 124.8)) {
      result = 2
    } else if ((124.8 < size) && (size < 129.9)) {
      result = 4
    }
    return result
  }
  if (month === 72) {
    if (size <= 99.8) {
      result = 0
    } else if ((99.8 < size) && (size <= 104.9)) {
      result = 1
    } else if ((104.9 < size) && (size <= 110)) {
      result = 2
    } else if ((110 < size) && (size <= 115.1)) {
      result = 3
    } else if ((115.1 < size) && (size <= 120.2)) {
      result = 2
    } else if ((120.2 < size) && (size <= 125.4)) {
      result = 2
    } else if ((125.4 < size) && (size < 130.5)) {
      result = 4
    }
    return result
  }
}
