/**
*  Predictor for typeCar from model/611013ac9193b9173300e88b
*  Predictive model by BigML - Machine Learning Made Easy
*/
function predictTypecar(day, direction, idofcar, section, timeSecond, timeMinute, timeHour) {
    if (timeMinute == null) {
        return 2.04839;
    }
    else if (timeMinute > 30) {
        if (idofcar == null) {
            return 2.27027;
        }
        else if (idofcar > 81949) {
            return 3;
        }
        else if (idofcar <= 81949) {
            if (idofcar > 51491) {
                if (section == null) {
                    return 1.84615;
                }
                else if (section > 2) {
                    if (timeHour == null) {
                        return 2.14286;
                    }
                    else if (timeHour > 1) {
                        return 2;
                    }
                    else if (timeHour <= 1) {
                        return 3;
                    }
                }
                else if (section <= 2) {
                    if (day == null) {
                        return 1.5;
                    }
                    else if (day > 5) {
                        if (section > 1) {
                            return 1;
                        }
                        else if (section <= 1) {
                            if (timeSecond == null) {
                                return 2.5;
                            }
                            else if (timeSecond > 25) {
                                return 3;
                            }
                            else if (timeSecond <= 25) {
                                return 2;
                            }
                        }
                    }
                    else if (day <= 5) {
                        return 1;
                    }
                }
            }
            else if (idofcar <= 51491) {
                if (timeSecond == null) {
                    return 2.42857;
                }
                else if (timeSecond > 53) {
                    return 1;
                }
                else if (timeSecond <= 53) {
                    if (timeMinute > 36) {
                        if (idofcar > 44241) {
                            return 3;
                        }
                        else if (idofcar <= 44241) {
                            if (timeMinute > 38) {
                                if (direction == null) {
                                    return 2.44444;
                                }
                                else if (direction > 1) {
                                    if (timeHour == null) {
                                        return 2.75;
                                    }
                                    else if (timeHour > 1) {
                                        return 3;
                                    }
                                    else if (timeHour <= 1) {
                                        return 2;
                                    }
                                }
                                else if (direction <= 1) {
                                    if (section == null) {
                                        return 2.2;
                                    }
                                    else if (section > 1) {
                                        return 2;
                                    }
                                    else if (section <= 1) {
                                        if (timeSecond > 40) {
                                            return 2;
                                        }
                                        else if (timeSecond <= 40) {
                                            return 3;
                                        }
                                    }
                                }
                            }
                            else if (timeMinute <= 38) {
                                return 3;
                            }
                        }
                    }
                    else if (timeMinute <= 36) {
                        if (timeSecond > 18) {
                            return 2;
                        }
                        else if (timeSecond <= 18) {
                            return 3;
                        }
                    }
                }
            }
        }
    }
    else if (timeMinute <= 30) {
        if (section == null) {
            return 1.72;
        }
        else if (section > 3) {
            if (timeSecond == null) {
                return 1.2;
            }
            else if (timeSecond > 48) {
                if (idofcar == null) {
                    return 1.66667;
                }
                else if (idofcar > 37860) {
                    return 2;
                }
                else if (idofcar <= 37860) {
                    return 1;
                }
            }
            else if (timeSecond <= 48) {
                return 1;
            }
        }
        else if (section <= 3) {
            if (day == null) {
                return 2.06667;
            }
            else if (day > 5) {
                if (timeSecond == null) {
                    return 2.75;
                }
                else if (timeSecond > 53) {
                    return 2;
                }
                else if (timeSecond <= 53) {
                    return 3;
                }
            }
            else if (day <= 5) {
                if (direction == null) {
                    return 1.81818;
                }
                else if (direction > 1) {
                    if (timeSecond == null) {
                        return 2.125;
                    }
                    else if (timeSecond > 38) {
                        if (idofcar == null) {
                            return 1.75;
                        }
                        else if (idofcar > 83043) {
                            return 1;
                        }
                        else if (idofcar <= 83043) {
                            return 2;
                        }
                    }
                    else if (timeSecond <= 38) {
                        if (timeSecond > 13) {
                            if (timeHour == null) {
                                return 2.66667;
                            }
                            else if (timeHour > 2) {
                                return 2;
                            }
                            else if (timeHour <= 2) {
                                return 3;
                            }
                        }
                        else if (timeSecond <= 13) {
                            return 2;
                        }
                    }
                }
                else if (direction <= 1) {
                    return 1;
                }
            }
        }
    }
    return null;
}
Close