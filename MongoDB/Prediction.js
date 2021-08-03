/**
*  Predictor for day from model/61089099e4279b249b003aab
*  Predictive model by BigML - Machine Learning Made Easy
*/
function predictDay(direction, ispecialday, idofcar, section, typecar, timeMinute, timeHour) {
    if (timeMinute == null) {
        return 3.95161;
    }
    else if (timeMinute > 36) {
        if (timeMinute > 55) {
            if (timeMinute > 58) {
                return 5;
            }
            else if (timeMinute <= 58) {
                if (timeMinute > 56) {
                    return 4;
                }
                else if (timeMinute <= 56) {
                    return 3;
                }
            }
        }
        else if (timeMinute <= 55) {
            if (timeMinute > 47) {
                if (ispecialday == null) {
                    return 2.25;
                }
                else if (ispecialday=="false") {
                    return 3;
                }
                else if (ispecialday=="true") {
                    return 2;
                }
            }
            else if (timeMinute <= 47) {
                if (direction == null) {
                    return 1.125;
                }
                else if (direction > 1) {
                    return 2;
                }
                else if (direction <= 1) {
                    return 1;
                }
            }
        }
    }
    else if (timeMinute <= 36) {
        if (timeMinute > 30) {
            if (timeMinute > 32) {
                return 6;
            }
            else if (timeMinute <= 32) {
                if (typecar == null) {
                    return 5.33333;
                }
                else if (typecar > 2) {
                    return 6;
                }
                else if (typecar <= 2) {
                    return 5;
                }
            }
        }
        else if (timeMinute <= 30) {
            if (timeMinute > 17) {
                if (timeMinute > 28) {
                    if (timeHour == null) {
                        return 4.2;
                    }
                    else if (timeHour > 1) {
                        if (section == null) {
                            return 3.66667;
                        }
                        else if (section > 3) {
                            return 3;
                        }
                        else if (section <= 3) {
                            return 4;
                        }
                    }
                    else if (timeHour <= 1) {
                        return 5;
                    }
                }
                else if (timeMinute <= 28) {
                    if (typecar == null) {
                        return 1.6;
                    }
                    else if (typecar > 1) {
                        return 1;
                    }
                    else if (typecar <= 1) {
                        return 2;
                    }
                }
            }
            else if (timeMinute <= 17) {
                if (section == null) {
                    return 5.3;
                }
                else if (section > 1) {
                    if (idofcar == null) {
                        return 5.77778;
                    }
                    else if (idofcar > 14133) {
                        if (idofcar > 65431) {
                            if (typecar == null) {
                                return 5.5;
                            }
                            else if (typecar > 2) {
                                return 6;
                            }
                            else if (typecar <= 2) {
                                return 5;
                            }
                        }
                        else if (idofcar <= 65431) {
                            return 6;
                        }
                    }
                    else if (idofcar <= 14133) {
                        return 5;
                    }
                }
                else if (section <= 1) {
                    return 1;
                }
            }
        }
    }
    return null;
}